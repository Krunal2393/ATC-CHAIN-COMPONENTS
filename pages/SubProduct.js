import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from 'embla-carousel-react'
import { useStateContext } from './api/auth/Context/ContextProvider'

const SubProducts = props => {
  // const { showHeader } = useStateContext()

  const {
    productData = [
      {
        image: '/assets/images/product1.png',
        name: 'food'
      },
      {
        image: '/assets/images/product1.png',
        name: 'dinner'
      },
      {
        image: '/assets/images/product1.png',
        name: 'food'
      },
      {
        image: '/assets/images/product1.png',
        name: 'dinner'
      }
    ],
    options
  } = props
  const [emblaRef] = useEmblaCarousel(options)
  // const [showHeader, setShowHeader] = useState(true)

  // const { isLoading, isError, data, error, onSuccess } = useQuery({
  //   queryKey: ['SliderProducts'],
  //   queryFn: getAllMainCategory
  // })
  // const EmblaCarousel = () => {
  //   const { slides, options } = useState()
  //   const [emblaRef] = useEmblaCarousel(options)
  // }
  // const [emblaRef, emblaApi] = useEmblaCarousel()

  // useEffect(() => {
  //   if (emblaApi) emblaApi.reInit()
  // }, [emblaApi])
  // const [emblaRef] = useEmblaCarousel()
  // const productData = [
  //   {
  //     image: '/assets/images/product1.png',
  //     name: 'food'
  //   },
  //   {
  //     image: '/assets/images/product1.png',
  //     name: 'dinner'
  //   },
  //   {
  //     image: '/assets/images/product1.png',
  //     name: 'food'
  //   },
  //   {
  //     image: '/assets/images/product1.png',
  //     name: 'dinner'
  //   }
  // ]

  // const settings = {
  //   dots: false,
  //   padding: '10px',
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 1,
  //   className: 'center',
  //   centerMode: true,
  //   centerPadding: '40px',
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1300,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4
  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }
  // console.log('krunal', showHeader)

  return (
    <>
      <div className='flex relative'>
        <div className='w-full overflow-hidden  ' ref={emblaRef}>
          <div className='flex flex-col sm:flex-row '>
            {productData.map((product, i) => (
              <>
                <div
                  key={i}
                  className='embla embla__container embla__slide__img'
                >
                  <div className=''>
                    <div className='flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 '>
                      <div className='relative group flex justify-center items-center h-full w-full'>
                        <div className='embla__slide__number'>
                          <span>{i + 1}</span>
                        </div>
                        <img
                          className='object-center object-cover h-full w-full rounded-t-lg'
                          src={
                            product?.image_1920 && product?.image_1920
                              ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                                  product?.image_1920
                                    ? product?.image_1920
                                    : product?.image_url
                                }`
                              : '/assets/images/product1.png'
                          }
                          alt={product?.name}
                        />

                        {props.showHeader && (
                          <button className='focus:outline-none line-clamp-1 focus:ring-2 rounded-t-lg   top-0 z-10 absolute text-xl font-bold leading-none text-gray-100 py-5 w-full bg-primary/40'>
                            {product?.name}
                          </button>
                        )}
                        <div className='absolute opacity-0 group-hover:opacity-100 rounded-t-lg transition duration-500 top-0 py-[30px] z-0 px-20 w-full bg-primary/50 bg-opacity-50' />
                      </div>
                    </div>
                    <div className='p-2 bg-primary text-white rounded-b-lg flex justify-between items-center px-6'>
                      <div>
                        <h3 className='text-lg font-bold line-clamp-1  '>
                          Click Here For more Detail
                          {/* {props.sliderData.desc} */}
                        </h3>
                      </div>
                      <div className=''>
                        Click Here For more Detail
                        {/* <PopOver /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
// <div className='flex relative'>
//   <div className='w-full  ' ref={emblaRef}>
//     {productData?.map((product, i) => (
//       <div
//         key={i}
//         className='grid  grid-cols-1 px-2 md:grid-cols-2  lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full'
//       >
//         <div className='flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 '>
//           <div className='relative group flex justify-center items-center h-full w-full'>
//             <img
//               className='object-center object-cover h-full w-full rounded-t-lg'
//               src={
//                 product?.image_1920 && product?.image_1920
//                   ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
//                       product?.image_1920
//                         ? product?.image_1920
//                         : product?.image_url
//                     }`
//                   : '/assets/images/product1.png'
//               }
//               alt={product?.name}
//             />
//             <button className='focus:outline-none line-clamp-1 focus:ring-2 rounded-t-lg   top-0 z-10 absolute text-xl font-bold leading-none text-gray-100 py-5 w-full bg-primary/40'>
//               {product?.name}
//             </button>
//             <div className='absolute opacity-0 group-hover:opacity-100 rounded-t-lg transition duration-500 top-0 py-[30px] z-0 px-20 w-full bg-primary/50 bg-opacity-50' />
//           </div>
//         </div>
//         <div className='p-2 bg-primary text-white rounded-b-lg flex justify-between items-center px-6'>
//           <div>
//             <h3 className='text-lg font-bold line-clamp-1 '>
//               Click Here For more Detail
//             </h3>
//           </div>
//           <div className=''>
//             Click Here For more Detail
//             {/* <PopOver /> */}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

export default SubProducts

{
  /* <div className='w-full'>
        <Slider {...settings}>
          {productData?.map((product, i) => (
            <div
              key={i}
              className='grid grid-cols-1 px-2 md:grid-cols-2  lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full'
            >
              <div className='flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 '>
                <div className='relative group flex justify-center items-center h-full w-full'>
                  <img
                    className='object-center object-cover h-full w-full rounded-t-lg'
                    src={
                      product?.image_1920 && product?.image_1920
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                            product?.image_1920
                              ? product?.image_1920
                              : product?.image_url
                          }`
                        : '/assets/images/product1.png'
                    }
                    alt={product?.name}
                  />
                  <button className='focus:outline-none line-clamp-1 focus:ring-2 rounded-t-lg   top-0 z-10 absolute text-xl font-bold leading-none text-gray-100 py-5 w-full bg-primary/40'>
                    {product?.name}
                  </button>
                  <div className='absolute opacity-0 group-hover:opacity-100 rounded-t-lg transition duration-500 top-0 py-[30px] z-0 px-20 w-full bg-primary/50 bg-opacity-50' />
                </div>
              </div>
              <div className='p-2 bg-primary text-white rounded-b-lg flex justify-between items-center px-6'>
                <div>
                  <h3 className='text-lg font-bold line-clamp-1 '>
                    Click Here For more Detail
                  </h3>
                </div>
                <div className=''>
                  Click Here For more Detail
                  {/* <PopOver /> */
}
//           </div>
//         </div>
//       </div>
//     ))}
//   </Slider>
// </div> */}
