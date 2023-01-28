import React from 'react'
import Image from 'next/image'
import { CubeIcon } from '../public/assets/shapes'

const Prod = () => {
  const Products = [
    {
      name: ''
    },
    {
      name: ''
    },
    {
      name: ''
    }
  ]
  return (
    // <div className='relative h prod flex w-full lg:w-3xl'>
    //   <div className=''>
    //     <Image
    //       src='/assets/images/chain.svg'
    //       alt=' '
    //       width={100}
    //       height={100}
    //       className=' w-40 sm:w-60 bg-white h-40 sm:h-60 '
    //     />
    //   </div>
    //   <div className=''>
    //     {/* <Image
    //       src='/assets/images/shape1.svg'
    //       alt=' '
    //       width={100}
    //       height={100}
    //       className='p-4 rounded-3xl w-3/4  opacity-70 '
    //     /> */}
    //     <p
    //       className='border h-8 w-36 m-6 p-1 rounded-3xl font-thin text-white
    //       text-center '
    //     >
    //       BEST SELLER
    //     </p>
    //     <p className='font-semibold text-white text-center'>
    //       Sub 1-1/ 10x10 mm
    //     </p>
    //   </div>
    // </div>
    // <div className='flex flex-col sm:flex-row w-full'>
    //   <div className='w-1/2 prod relative sm:w-full sm:h-96 overflow-hidden'>
    //     <Image
    //       src='/assets/images/chain.svg'
    //       alt=' '
    //       width={100}
    //       height={100}
    //       className=' max-w-[20rem] min-w-2xl w-full rounded-lg bg-white  '
    //     />
    //   </div>
    //   <div className='w-1/2'>huiii</div>
    // </div>
    // <div className='grid lg:grid-cols-2 gap-4 m-2'>
    //   {Products.map(item => (
    //     <div className='product-bg mb-2  h-full w-full grid grid-cols-2 text-white'>
    //       <div className='bg-white w-full '>
    //         <Image
    //           src='/assets/images/chain.svg'
    //           alt=' '
    //           width={100}
    //           height={100}
    //           className=' max-w-[20rem] min-w-2xl w-full rounded-lg bg-white  '
    //         />
    //       </div>
    //       <div className='w-full p-2'>
    //         <h1 className='font-bold m-2 text-lg text-left'>
    //           Sub 1-1/ 10x10 mm
    //         </h1>
    //  <div className=' m-2 mt-4'>
    //     <div className='flex flex-col  sm:flex-row pr-28 sm:space-x-3 '>
    //       <div className='flex gap-4 items-center w-full'>
    //         <div className='bg-white p-3 rounded-lg'>
    //           <CubeIcon />
    //         </div>
    //         <div>
    //           <h5 className='text-sm'>Height</h5>
    //            <p className='text-sm text-gray-light'>50 mm</p>
    //           <p></p>
    //         </div>
    //       </div>
    //       <div className='flex gap-4 items-center w-full'>
    //         <div className='bg-white p-3 rounded-lg'>
    //           <CubeIcon />
    //         </div>
    //         <div>
    //           <h5 className='text-sm pt-4 sm:pt-0'>Weight</h5>
    //           <p className='text-sm text-gray-light'>50 mm</p>
    //           <p></p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='flex gap-4 items-center w-full mt-4'>
    //       <div className='bg-white p-3 rounded-lg'>
    //         <CubeIcon />
    //       </div>
    //       <div>
    //         <h5 className='text-sm '>Colour</h5>
    //         <p className='text-sm text-gray-light'>Black </p>
    //         <p></p>
    //       </div>
    //     </div>
    //   </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className='grid lg:grid-cols-2 gap-4 m-2 h-full'>
      {Products.map(item => (
        <div className='product-bg mb-2   grid grid-cols-2 text-white'>
          <div className='bg-white w-full '>
            <Image
              src='/assets/images/chain.svg'
              alt=' '
              width={100}
              height={100}
              className=' max-w-[20rem] min-w-2xl w-full rounded-lg bg-white  '
            />
          </div>
          <div className='w-64'>
            {' '}
            <h1 className='font-bold m-2 text-lg text-left'>
              Sub 1-1/ 10x10 mm
            </h1>
            <div className=' m-4 '>
              <div className='flex flex-col lg:flex-col sm:flex-row   '>
                <div className='flex gap-4 items-center w-full'>
                  <div className='bg-white p-3 rounded-lg'>
                    <CubeIcon />
                  </div>
                  <div>
                    <h5 className='text-sm'>Height</h5>
                    <p className='text-sm text-gray-light'>50 mm</p>
                    <p></p>
                  </div>
                </div>
                <div className='flex gap-4 items-center w-full'>
                  <div className='bg-white p-3 rounded-lg'>
                    <CubeIcon />
                  </div>
                  <div>
                    <h5 className='text-sm pt-4 sm:pt-0'>Weight</h5>
                    <p className='text-sm text-gray-light'>50 mm</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 items-center  w-full '>
                <div className='bg-white p-3 rounded-lg'>
                  <CubeIcon />
                </div>
                <div>
                  <h5 className='text-sm '>Colour</h5>
                  <p className='text-sm text-gray-light'>Black </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Prod
