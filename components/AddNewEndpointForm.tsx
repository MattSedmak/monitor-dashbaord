import { addEndpoint } from '@/app/(dashboard)/_actions/endpoints';
import { Label } from '@radix-ui/react-label';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const AddNewEndpointForm = () => {
  return (
    <form action={addEndpoint} className='flex items-end gap-x-4 text-sm w-full'>
      <div className='flex-1'>
        <Label htmlFor='url'>Add url</Label>
        <Input
          name='url'
          type='text'
          id='url'
          required
          placeholder='https://www.google.com'
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='name'>Add name</Label>
        <Input name='name' type='text' id='name' required placeholder='My website' />
      </div>
      <Button className='text-xs'>
        <PlusIcon className='size-4 mr-2' />
        Add
      </Button>
    </form>
  );
};
