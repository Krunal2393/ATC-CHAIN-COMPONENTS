// import React from 'react'
// import { Card } from 'flowbite-react'

// const productani = () => {
//   const data = [
//     {
//       title: ' Noteworthy technology acquisitions 2021',
//       text: `Here are the biggest enterprise technology acquisitions of 2021 so
//     far, in reverse chronological order.`
//     },
//     {
//       title: 'Noteworthy technology acquisitions 2021',
//       text: `Here are the biggest enterprise technology acquisitions of 2021 so
//     far, in reverse chronological order.`
//     }
//   ]
//   return (
//     <div>
//       <div className='max-w-sm'>
//         {data.map(product => (
//           <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
//             <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//               {product.title}
//             </h5>
//             <p className='font-normal text-gray-700 dark:text-gray-400'>
//               {product.text}
//             </p>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default productani
import { Card } from 'flowbite-react'
import React from 'react'
import { motion } from 'framer-motion'

export default function Product () {
  const data = [
    {
      title: ' Noteworthy technology acquisitions 2021',
      text: `Here are the biggest enterprise technology acquisitions of 2021 so
         far, in reverse chronological order.`
    },
    {
      title: 'Noteworthy technology acquisitions 2021',
      text: `Here are the biggest enterprise technology acquisitions of 2021 so
         far, in reverse chronological order.`
    },
    {
      title: ' Noteworthy technology acquisitions 2021',
      text: `Here are the biggest enterprise technology acquisitions of 2021 so
         far, in reverse chronological order.`
    },
    {
      title: ' Noteworthy technology acquisitions 2021',
      text: `Here are the biggest enterprise technology acquisitions of 2021 so
         far, in reverse chronological order.`
    }
  ]

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <>
      <div className='splash' />
      <div className='max-w-sm '>
        {data.map(datas => (
          <motion.div
            className='card-container'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.div className='card' variants={cardVariants}>
              <Card
                imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'
                className=''
              >
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {datas.title}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  {datas.text}
                </p>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
