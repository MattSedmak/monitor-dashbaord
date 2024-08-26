import { AddNewEndpointForm } from '@/components/AddNewEndpointForm';
import { DashboardGrid } from '@/app/(dashboard)/_components/DashboardGrid';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col space-y-8 px-4 lg:px-14 pb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <AddNewEndpointForm />
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <DashboardGrid />
      </Suspense>
    </main>
  );
}
