'use server';
import prisma from '@/prisma/client';

export const checkEndpoint = async (endpointId: number) => {
  const endpoint = await prisma.endpoint.findUnique({ where: { id: endpointId } });

  if (!endpoint) {
    throw new Error('Endpoint not found');
  }

  const start = Date.now();
  try {
    const res = await fetch(endpoint.url, { method: 'GET' });
     const responseTime = Date.now() - start;

     await prisma.endpoint.update({
       where: { id: endpointId },
       data: {
         status: res.status,
         responseTime,
       },
     });
     if (!res.ok) {
       console.warn(`Endpoint ${endpoint.url} is down (status: ${res.status})`);
       // TODO: Set up mail notification
     }
  } catch (error) {
    if (error instanceof Error) {
      console.error('An unexpected error occurred.', error.message);
    }
  }
};
