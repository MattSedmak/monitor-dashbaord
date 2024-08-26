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
        status: res.status === 200 ? 'UP' : 'DOWN',
        responseTime,
      },
    });
  } catch (error) {
    await prisma.endpoint.update({
      where: { id: endpointId },
      data: {
        status: 'DOWN',
      },
    });

    // Handle error, send alerts, etc.
    console.error(error);
  }
};
