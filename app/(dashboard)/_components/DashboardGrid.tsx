import React from 'react';
import { DashboardCard } from './DashboardCard';
import { RefreshAllButton } from '@/components/RefreshAllButton';
import { useQuery } from '@tanstack/react-query';
import prisma from '@/prisma/client';

export const DashboardGrid = async () => {
  const endpoints = await prisma.endpoint.findMany();

  return (
    <div className='py-8 px4 lg:px-14'>
      <div className='flex justify-between items-center pb-4'>
        <h2 className='text-xl font-bold pb-4'>Overview</h2>
        <RefreshAllButton />
      </div>
      <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {endpoints.map((endpoint: any) => (
          <DashboardCard key={endpoint.id} {...endpoint} />
        ))}
      </div>
    </div>
  );
};
