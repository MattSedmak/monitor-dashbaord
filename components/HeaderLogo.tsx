import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeaderLogo = () => {
  return (
    <Link href='/'>
      <div className='items-center hidden lg:flex'>
        <Image src='/logo.svg' height={28} width={28} alt='logo' />
        <p className='text-black font-semibold ml-2 text-md'>Api Monitor</p>
      </div>
    </Link>
  );
};
