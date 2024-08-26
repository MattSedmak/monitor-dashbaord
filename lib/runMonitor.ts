'use server';
import prisma from '../prisma/client';

import { checkEndpoint } from './checkEndpoint';

export const runMonitor = async () => {
  const endpoints = await prisma.endpoint.findMany();

  for (const endpoint of endpoints) {
    checkEndpoint(endpoint.id);
  }
};
