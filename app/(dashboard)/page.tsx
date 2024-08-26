import { AddNewEndpointForm } from '@/components/AddNewEndpointForm';
import { DashboardGrid } from '@/app/(dashboard)/_components/DashboardGrid';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getEndpoints } from './_actions/endpoints';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['endpoints'],
    queryFn: getEndpoints,
  });
  return (
    <main>
      <div className='flex flex-col space-y-8 px-4 lg:px-14 pb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <AddNewEndpointForm />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DashboardGrid />
      </HydrationBoundary>
    </main>
  );
}
