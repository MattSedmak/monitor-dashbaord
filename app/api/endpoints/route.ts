import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const endpoints = await prisma.endpoint.findMany();

  return NextResponse.json(endpoints);
}
