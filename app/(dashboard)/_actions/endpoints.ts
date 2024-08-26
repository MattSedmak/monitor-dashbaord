'use server';
import prisma from '@/prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const addEndpointSchema = z.object({
  url: z.string(),
  name: z.string(),
});

export const addEndpoint = async (formData: FormData) => {
  const result = addEndpointSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }

  const data = result.data;

  await prisma.endpoint.create({
    data: {
      url: data.url,
      name: data.name,
      status: null,
      responseTime: null,
    },
  });

  revalidatePath('/');
};

export const getEndpoints = async () => {
  try {
    const data = await prisma.endpoint.findMany();
    return { data };
  } catch (error) {
    return { error: error };
  }
};
