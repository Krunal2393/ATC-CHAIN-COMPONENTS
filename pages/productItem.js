import React from 'react'

const Product = () => {
  const productItem = [
    {
      image: './assets/images/product1.png',
      labelChips: './assets/images/Vfire.png',
      title: 'Roller Chain & Multi Hinge transporter Belt.',
      text:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing '
    },
    {
      image: './assets/images/Product2.png',
      labelChips: './assets/images/Vhome.png',
      title: 'Thermoplastic slat chain.',
      text:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing '
    },
    {
      image: './assets/images/product1.png',
      labelChips: './assets/images/Vfire.png',
      title: 'Roller Chain & Multi Hinge transporter Belt.',
      text:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing '
    }
    // {image:"",labelChips:"",text:""},
    // {image:"",labelChips:"",text:""},
    // {image:"",labelChips:"",text:""},
  ]

  // return (

  //   <><div>

  //   <div className="max-w-sm bg-white border  mt-6 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  //     <div className='rounded-lg overflow-hidden   p-5 bg-white relative'>
  //       <div className=''>
  //         <div className='absolute pl-2 pr-5 m-[30px] bg-red-100 rounded-[30px] text-red-500 flex labelChips'>
  //           <img src="./assets/images/Vector.png " className='self-center pr-[0.75rem] pl-2' alt="" /> Popular
  //         </div>

  //       </div>
  //       <img className="rounded-[30px]" src="./assets/images/product1.png" alt="" />
  //     </div>
  //     <div>
  //       <div className='mt-[18px] pl-5'>
  //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary dark:text-white">Roller Chain & Multi Hinge transporter Belt.</h5>
  //       </div>
  //       <div className='pl-5'>
  //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  return (
    <>
      {/* <div class="max-w-sm rounded overflow-hidden  shadow-lg">
        <img src={'/assets/images/product1.png'} className='self-center pr-[0.75rem] pl-2' alt="ddd" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2"></div>
          <p class="text-gray-700 text-base">

          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="in-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div> */}
      <div className='flex gap-3 flex-col md:flex-row items-center'>
        {productItem &&
          productItem.map(detail => (
            <div>
              <div className='max-w-sm bg-white border  mt-6 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <div className='rounded-lg overflow-hidden   p-5 bg-white relative'>
                  <div className=''>
                    <div className='absolute pl-2 pr-5 m-[30px] bg-red-100 rounded-[30px] text-red-500 flex labelChips'>
                      <img
                        src={detail.labelChips}
                        className='self-center pr-[0.75rem] pl-2'
                        alt=''
                      />{' '}
                      Popular
                    </div>
                  </div>
                  <img
                    className='rounded-[30px] w-full'
                    src={detail.image}
                    alt=''
                  />
                </div>
                <div>
                  <div className='mt-[18px] pl-5'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-secondary dark:text-white'>
                      {detail.title}
                    </h5>
                  </div>
                  <div className='pl-5'>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2'>
                      {detail.text}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {productItem.length === 0 && <div>Not found.</div>}
    </>
  )
}
export default Product
