'use client';
import React, { useTransition } from 'react';
import { Button } from './ui/button';
import { ListRestartIcon } from 'lucide-react';
import { runMonitor } from '@/lib/runMonitor';
import { useRouter } from 'next/navigation';

export const RefreshAllButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    startTransition(async () => {
      await runMonitor();
      router.refresh();
    });
  };

  return (
    <Button className='text-xs' onClick={handleClick}>
      <ListRestartIcon className='size-4 mr-2' />
      {isPending ? 'Refreshing...' : 'Refresh all'}
    </Button>
  );
};
