import { React, useState } from 'react'
import Slider from 'react-slick'

export default function Carousal () {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // vertical: true,
    // verticalSwipping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const indusExpert = [
    {
      image: './assets/images/foodmachinary.png',
      title: 'Food & beverages Industry',
      text: `ATC chains offer a one stop solution for all your beverage
      necessities. We produce PET bottles, jars, containers and
      glass, bottle case, labeler and assemble so brands don’t
      have to bother about the labels & the process of white
      assembling. We deliver premium set of services that
      helps brand deliver premium products .`
    },

    {
      image: './assets/images/foodmachinary.png',
      title: 'Food & beverages Industry',
      text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`
    },
    {
      image: './assets/images/foodmachinary.png',
      title: 'Food & beverages Industry',
      text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`
    },
    {
      image: './assets/images/foodmachinary.png',
      title: 'Food & beverages Industry',
      text: `ATC chains offer a one stop solution for all your beverage
  necessities. We produce PET bottles, jars, containers and
  glass, bottle case, labeler and assemble so brands don’t
  have to bother about the labels & the process of white
  assembling. We deliver premium set of services that
  helps brand deliver premium products.`
    }
  ]

  return (
    <>
      <div className='relative'>
        <div className=' flex w-full justify-end'>
          <div className='relative-e '>
            <img
              src='./assets/images/bcginstsol.svg'
              alt='dfdd'
              className='absolute-e hidden sm:flex'
              width='320'
            />
          </div>
        </div>
        <div
          style={{ bottom: '40px' }}
          className='absolute-e top-0 mt-0 sm:-mt-52'
        >
          <div>
            <div className='p-4'>
              <p className='text-primary'>INDUSTRIES</p>
              <p className='text-primary text-2xl mt-5'>
                Industries we have set our expertise on!
              </p>
            </div>

            <div className=''>
              <Slider ref={setSliderRef} {...sliderSettings}>
                {indusExpert &&
                  indusExpert.map(detail => (
                    <div>
                      <img
                        className='rounded-[30px] w-full h-full p-4'
                        src={detail.image}
                        alt=''
                      />
                      <div className='opacity-95 -mt-20 bg-white rounded-3xl pt-5 pl-11 pr-5 m-8'>
                        <p className='text-primary font-bold text-xl sm:text-2xl line-clamp-1 '>
                          {' '}
                          {detail.title}{' '}
                        </p>
                        <p className='line-clamb-5 mt-4 line-clamp-5'>
                          {' '}
                          {detail.text}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// const hotelCards = [
//   {
//     imageSrc:
//       'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
//     title: 'Studio Room',
//     description: 'Lorem ipsum dolor sit amet, consectur dolori',
//     pricingText: 'USD 50/Day',
//     features: ['Free Wifi', 'Free breakfast']
//   },
//   {
//     imageSrc:
//       'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//     title: 'Deluxe Room',
//     description: 'Lorem ipsum dolor sit amet, consectur dolori',
//     pricingText: 'USD 80/Day',
//     features: ['Free Wifi', 'Free breakfast']
//   },
//   {
//     imageSrc:
//       'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
//     title: 'King Deluxe Room',
//     description: 'Lorem ipsum dolor sit amet, consectur dolori',
//     pricingText: 'USD 150/Day',
//     features: ['Free Wifi', 'Free breakfast', 'Discounted Meals']
//   },
//   {
//     imageSrc:
//       'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//     title: 'Royal Suite',
//     description: 'Lorem ipsum dolor sit amet, consectur dolori',
//     pricingText: 'USD 299/Day',
//     features: [
//       'Free Wifi',
//       'Free breakfast',
//       'Discounted Meals',
//       "MacBook for work use (hotel's property)"
//     ]
//   }
// ]

{
  /* <div className='controls'>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div> */
}

// const IndusExpert = () => {

//   const settings = {
//     className: 'center',
//     data: indusExpert,
//     centerMode: true,
//     infinite: true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     speed: 500
//   }

//   return (
//     <>
//       <div>
//         <div className='p-4'>
//           <p className='text-primary'>INDUSTRIES</p>
//           <p className='text-primary text-2xl mt-5'>
//             Industries we have set our expertise on!
//           </p>
//         </div>
//         <Slider {...settings}>
//           {indusExpert &&
//             indusExpert.map(detail => (
//               <>
//                 <div className='  '>
//                   <div className='relative '>
//                     <img
//                       className='rounded-[30px] w-full h-full p-4'
//                       src={detail.image}
//                       alt=''
//                     />
//                     <div className='opacity-95 -mt-20 bg-white rounded-3xl pt-5 pl-11 pr-5 m-8'>
//                       <p className='text-primary font-bold text-xl sm:text-2xl line-clamp-1 '>
//                         {detail.title}
//                       </p>
//                       <p className='line-clamb-5 mt-4 line-clamp-5'>
//                         {detail.text}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ))}
//         </Slider>
//       </div>
//       {/* <div className='grid grid-flow-row auto-rows-max'>
//         <div className='p-4'>
//           <p className='text-primary'>INDUSTRIES</p>
//           <p className='text-primary text-2xl mt-5'>
//             Industries we have set our expertise on!
//           </p>
//         </div>

//         <div className='sm:flex max-w-xl min-w-xl  sm:w-11/12'>
//           {indusExpert &&
//             indusExpert.map(detail => (
//               <>
//                 <div className='  '>
//                   <div className='relative '>
//                     <img
//                       className='rounded-[30px] w-full h-full p-4'
//                       src={detail.image}
//                       alt=''
//                     />
//                     <div className='opacity-95 -mt-20 bg-white rounded-3xl pt-5 pl-11 pr-5 m-8'>
//                       <p className='text-primary font-bold text-xl sm:text-2xl line-clamp-1 '>
//                         {detail.title}
//                       </p>
//                       <p className='line-clamb-5 mt-4 line-clamp-5'>
//                         {detail.text}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ))}
//         </div>
//       </div> */}
//     </>
//   )
// }

// export default IndusExpert

// removes default buttons
// arrows: false,
// slidesToShow: 2,
// slidesToScroll: 1,
// infinite: false
// className: 'center',
// centerMode: false,
// infinite: false,
// centerPadding: '60px',
// slidesToShow: 3,
// speed: 500,
// appendDots: dots => {
//   return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />
// }
