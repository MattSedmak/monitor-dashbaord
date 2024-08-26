import cron from 'node-cron';
import { runMonitor } from '@/lib/runMonitor';

cron.schedule('*/5 * * * *', async () => {
  console.log('Running monitor job...', Date.now());
  runMonitor().catch(console.error);
});
