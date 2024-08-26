'use client';
import React from 'react';
import { DashboardCard } from './DashboardCard';
import { RefreshAllButton } from '@/components/RefreshAllButton';
import { getEndpoints } from '../_actions/endpoints';
import { useQuery } from '@tanstack/react-query';

export const DashboardGrid = () => {
  // const endpoints = await getEndpoints();
  const { data, error, isPending } = useQuery({
    queryKey: ['endpoints'],
    queryFn: () => getEndpoints(),
    refetchInterval: 300000,
  });

  return (
    <div className='py-8 px4 lg:px-14'>
      <div className='flex justify-between items-center pb-4'>
        <h2 className='text-xl font-bold pb-4'>Overview</h2>
        <RefreshAllButton />
      </div>
      <div className='max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data?.data?.map((endpoint: any) => (
          <DashboardCard key={endpoint.id} {...endpoint} />
        ))}
      </div>
    </div>
  );
};
