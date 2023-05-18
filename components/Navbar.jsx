'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

console.log('Hello');

const Navbar = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='w-full pt-3 mb-16 flex-between'>
      <Link
        href='/'
        className='flex gap-2 flex-center'
      >
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className='hidden sm:flex'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link
              href='/create-prompt'
              className='black_btn'
            >
              Create Post
            </Link>

            <button
              type='button'
              className='outline_btn'
            >
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className='relative flex sm:hidden'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
