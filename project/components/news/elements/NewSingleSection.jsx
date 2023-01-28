import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

import {
  ClockIcon,
  FireIcon,
  HomeIcon,
} from '../../../public/assets/icons/icons';
import ErrorBoundary from '../../Ui/ErrorBoundary/ErrorBoundary';

const NewSingleSection = ({ data }) => {
  console.log('blog', data);
  return (
    <ErrorBoundary>
      <div className='rounded-md max-w-lg min-w-max max-w-6xl hover:bg-white hover:text-black transition-all delay-100 hover:scale-110 hover:shadow-lg'>
        <div className='flex p-4 leading-none max-w-6xl'>
          <div className='flex'>
            <Image
              src='/assets/images/industry/industry-1.png'
              alt='pic'
              width={300}
              height={200}
              className='h-32 lg:h-44 w-56 rounded-xl shadow-2xl transform   border-gray-300'
            />
          </div>

          <div className='flex-col text-black my-2'>
            <div className='w-full'>
              {data?.type === 'blog' ? (
                <span className='gap-2 p-1 mx-3 flex items-center bg-[#FEE2E2] w-28 rounded-full px-4'>
                  <FireIcon />
                  <span className='text-lg text-text-orange font-bold'>
                    {data?.type}
                  </span>
                </span>
              ) : (
                <span className='gap-2 p-1 text-[#1D4ED8] mx-3 flex items-center bg-[#DBEAFE] w-28 rounded-full px-4'>
                  <HomeIcon />
                  <span className='text-lg  font-bold'>{data?.type}</span>
                </span>
              )}
            </div>
            <div className='text-md flex justify-between px-4 my-2'>
              <span className='font-normal text-lg lg:text-2xl text-primary'>
                {data?.name}
              </span>
            </div>
            {data?.start_date && (
              <p className='flex items-center gap-3 text-md px-4 my-3'>
                <ClockIcon />
                5:00 Pm <span className='font-bold px-1'>|</span>{' '}
                {data?.start_date}
              </p>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default NewSingleSection;
