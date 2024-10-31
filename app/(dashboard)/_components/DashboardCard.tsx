'use client';
import { Endpoint } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { RefreshCcwIcon, Trash2Icon, ZapIcon, ZapOffIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { checkEndpoint } from '@/lib/checkEndpoint';
import { useRouter } from 'next/navigation';
import { deleteEndpoint } from '../_actions/endpoints';

type DashBoardCardProps = Omit<Endpoint, 'createdAt'>;

export const DashboardCard = ({
  id,
  name,
  url,
  status,
  responseTime,
  lastChecked,
}: DashBoardCardProps) => {
  const router = useRouter();
  const handleRefresh = async (id: number) => {
    await checkEndpoint(id);
    router.refresh();
  };

  return (
    <Card className='rounded-xl border bg-card text-card-foreground shadow'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center text-lg'>
          <span>{name}</span>
          {status === 200 ? (
            <ZapIcon className='size-4 stroke-green-500' />
          ) : (
            <ZapOffIcon className='size-4 stroke-red-500' />
          )}
        </CardTitle>
        <CardDescription className='text-xs text-muted-foreground'>
          {url}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <p className='text-sm font-normal leading-none'>
          Status:
          {status ? (
            <span
              className={`${
                status === 200 ? 'text-green-500' : 'text-red-500'
              } font-bold ml-2`}
            >
              {status}
            </span>
          ) : (
            <span className='text-xs text-muted-foreground ml-2'>unkown</span>
          )}
        </p>
        <p className='text-sm font-normal leading-none'>
          Response time:{' '}
          <span className='text-xs text-muted-foreground'>{responseTime}</span>
        </p>
      </CardContent>
      <CardFooter className='flex justify-between items-end'>
        <div className='space-x-2'>
          <Button
            className='text-xs h-auto py-2 px-2'
            onClick={() => handleRefresh(id)}
          >
            <RefreshCcwIcon className='size-3' />
          </Button>
          <Button
            className='h-auto py-2 px-2'
            variant='outline'
            onClick={() => deleteEndpoint(id)}
          >
            <Trash2Icon className='size-3' />
          </Button>
        </div>
        <p className='text-xs text-muted-foreground'>
          Updated: {lastChecked.toLocaleString('se-SE')}
        </p>
      </CardFooter>
    </Card>
  );
};
