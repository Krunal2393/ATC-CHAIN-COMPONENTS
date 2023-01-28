import React from 'react'
import Image from 'next/image'

const Blog = () => {
  const blogITem = [
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    },
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    },
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    },
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    },
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    },
    {
      image: '/assets/images/blog1.svg',
      title: 'Dianne Russell',
      text: ' The things we need to check when we want to buy a house',
      date: '25 Apr 2021'
    }
  ]

  return (
    <>
      <div className=''>
        <div className='flex  place-items-center justify-between'>
          <div>
            <img
              src='/assets/images/bcgblog.svg'
              alt=''
              className='hidden sm:flex w-5/6'
            />
          </div>
          <div className='mb-10 w-full sm:w-2/6'>
            <p className='text-primary text-3xl text-end'>
              Discover the Industry insights with our Blogs.
            </p>
            <p className='text-gray-600 text-sm text-end mt-10'>
              We deliver end-to-end conveying customer-centric services that
              caters to innovative solutions for all kinds of consumer.
            </p>
          </div>
        </div>

        <div className=' grid sm:grid-cols-2 space-x-2'>
          {blogITem &&
            blogITem.map(detail => (
              <>
                <div
                  href='#'
                  class='flex   mt-4  bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                  <Image
                    src={detail.image}
                    alt=' '
                    width={100}
                    height={100}
                    className='p-4 rounded-3xl w-auto sm:w-1/2'
                  />
                  <div class='flex flex-col justify-between p-4 leading-normal'>
                    <p class='mb-2 text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      {detail.title}
                    </p>
                    <p class='mb-3 text-sm font-normal text-gray-700 dark:text-gray-400'>
                      {detail.text}
                    </p>
                    <p className='#666666  sm:text-sm'> {detail.date}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
        <button
          href='#'
          className='bg-btn-secondary h-10 rounded-3xl w-36 absolute right-12 text-white'
        >
          see all
        </button>
      </div>
    </>
  )
}

export default Blog

{
  /* <div className='flex flex-col sm:flex-row'>
                  <div className='flex w-fit sm:w-1/2 p-4 sm:pl-11 mt-5 border-b-4 pb-2'>
                    <img src={detail.image} alt=' ' className='' />
                    <div className='px-6 py-4 space-y-4'>
                      <p className='#666666 text-sm'>{detail.title}</p>
                      <p className='#1b1c57 '>{detail.text}</p>
                      <p className='#666666 text-sm'> {detail.date}</p>
                    </div>
                  </div>

                  <div className='flex w-fit sm:w-1/2 p-4 sm:pl-11 mt-5 border-b-4 pb-2'>
                    <img src={detail.image} alt=' ' className='' />
                    <div className='px-6 py-4 space-y-4'>
                      <p className='#666666 text-sm'>{detail.title}</p>
                      <p className='#1b1c57 '>{detail.text}</p>
                      <p className='#666666 text-sm'> {detail.date}</p>
                    </div>
                  </div>
                </div> */
}
