// import React from 'react'

// const productQuery = () => {
//   return (
//     <div className=' flex pt-8 flex-col md:flex-row '>
//       <div className=''>
//         <div className=''>
//           <div className='absolute p-6 m-[140px] mt-[680px] bg-white rounded-[30px] flex    labelChips'>
//             <img
//               src='./assets/images/Home.png '
//               className='self-center  p-1 bg-purple-600 rounded-lg border-4 border-b-purple-300 '
//               alt=''
//             />
//             <p className='p-1.5 text-purple-900 h-[34px] md:h-[60px] w-[269px] md:w-[269px]'>
//               35 West Dental Street California 1004
//             </p>
//           </div>
//           <iframe
//             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470011.9977177791!2d71.99947066605088!3d23.02492025099335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859b38e8f00d%3A0xeb3878996e5277d1!2sOTFCODER!5e0!3m2!1sen!2sin!4v1671797033961!5m2!1sen!2sin'
//             className='h-[827px]  w-[637px] rounded-[60px] ml-6 p-6'
//           ></iframe>
//         </div>

//         <div></div>
//       </div>

//       <div className='p-6'>
//         <div className=''>
//           <p className='text-xs text-purple-800'>BOOK THE PRODUCTS</p>
//           <div className='flex pt-5'>
//             <p className=' text-primary text-2xl font-bold'>ATC Chain </p>
//             <p className='pl-2 text-2xl text-[#1B1C57] font-bold'>Products</p>
//           </div>

//           <p className='text-xs pt-5'>
//             Lorem ipsum is placeholder text commonly used in the graphic, print,
//             and publishing industries for previewing layouts and visual{' '}
//           </p>
//         </div>

//         <div>
//           <form className='pt-[75px]'>
//             <div className='grid gap-2 mb-3 md:grid-cols-2'>
//               <div>
//                 <p>NAME</p>
//                 <input
//                   type='text'
//                   placeholder='Enter your name..'
//                   className='rounded-lg flex mt-3 border-gray-200 w-[620px] md:w-[250px] '
//                 ></input>
//               </div>
//               <div>
//                 <p>EMAIL ADDRESS</p>
//                 <input
//                   type='text'
//                   placeholder='Enter your name..'
//                   className='rounded-lg mt-3  border-gray-200 w-[620px] md:w-[250px]'
//                 ></input>
//               </div>
//             </div>
//             <p className='mt-[25px]'>MESSAGES</p>
//             <input
//               type='text'
//               placeholder='Enter your messages..'
//               className='rounded-lg h-[200px] w-[620px]  border-gray-200'
//             ></input>
//           </form>
//         </div>
//         <div className='flex'>
//           <div className='absolute p-6 mt-[125px]  bg-white rounded-[30px]  flex labelChips'>
//             <img
//               src='./assets/images/Calling.png '
//               className='self-center  p-4 bg-purple-600 rounded-lg border-4 border-b-purple-300'
//               alt=''
//             />
//             <div>
//               <p className='pt-2 ml-2'>Mobile Number</p>
//               <p className='ml-2'>03 482 394 123</p>
//             </div>
//           </div>
//           <div className='pl-[400px] pt-8'>
//             <button
//               type='button'
//               className='bg-orange-500 mt-[125px] text-white rounded-lg p-[13.5px]'
//             >
//               send Inquiry
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default productQuery
import { useMutation } from '@tanstack/react-query'
import { Alert, Toast } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorBoundary, Toaster } from '../project/components/Ui'
// import { conactForm } from '../../../fetchers/universalFetch'
// import {
//   AirplaneIcon,
//   CallingIcon,
//   HomeIcon
// } from '../../../public/assets/icons/icons'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { conactForm } from '../project/fetchers/universalFetch'
import {
  AirplaneIcon,
  CallingIcon,
  HomeIcon
} from '../project/public/assets/icons/icons'
// import Toaster from '../Toast/Toaster'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'

// const containerVariants = {
//   hidden: { x: -100 },
//   visible: { x: 0, transition: { duration: 1 } }
// }

const ContactForm = () => {
  const {
    register,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: 'onChange' })
  const [formdata, setFormData] = useState()
  // const SubmitContactFrom = () => {
  //   return useMutation(conactForm);
  // };
  // const { mutate, isLoading, isError } = useMutation(formdata, {
  //   onSuccess: (successData) => {
  //     console.log(successData);
  //   },
  // });
  // SubmitContactFrom();
  const { mutate, isLoading, isError, isSuccess, status, data } = useMutation({
    mutationFn: formdata => {
      return conactForm(formdata)
    }
  })
  const contactFormDataHandle = data => {
    setFormData(data)
    mutate(data)
  }
  useEffect(() => {
    if (isSuccess) {
      Toaster.fire({
        icon: 'success',
        title: data?.data?.result
      })
    }
    reset()
  }, [isSuccess])
  // const cardVariants = {
  //   offscreen: {
  //     y: 300
  //   },
  //   onscreen: {
  //     y: 50,
  //     rotate: -10,
  //     transition: {
  //       type: 'spring',
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // }

  return (
    <>
      {/* <motion.div className='bg-red-200 h-[827px]' animate={navVariants}>
        ssdf
      </motion.div> */}
      <ErrorBoundary>
        <div className=' -mt-36 mb-20 contact-section-bg  block pt-32 lg:pt-80 md:block lg:flex gap-5 items-center justify-center '>
          {' '}
          <div className='w-full  items-center justify-center'>
            <motion.div
              className='animated-div'
              initial={{ x: -50 }}
              animate={{ x: 10 }}
              transition={{ duration: 10 }}
            >
              <div className='w-full flex items-center justify-center'>
                <div className='absolute p-6 m-[140px] hidden lg:block  lg:mt-[550px] 2xl:mt-[620px]  bg-white rounded-[30px] flex labelChips'>
                  <div className='flex gap-4 items-center  justify-center'>
                    <span className='bg-purple-700/20 p-2 rounded-xl ring-purple-500 ring-2'>
                      <p className='bg-[#583FBC] p-2 text-white rounded-xl'>
                        <HomeIcon />
                      </p>
                    </span>
                    <p className='font-bold text-text-primary  h-[34px] md:h-[60px] w-[250px] md:w-[250px]'>
                      35 West Dental Street California 1004
                    </p>
                  </div>
                </div>

                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.857764410038!2d72.52734171538503!3d23.02899412186599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8555282e0cbf%3A0x21347c8e76fbf474!2sTecblic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673595504166!5m2!1sen!2sin'
                  className=' rounded-3xl w-full lg:w-[70vh] h-full lg:h-[75vh] hidden lg:block '
                  style={{ border: 0 }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </motion.div>
          </div>
          <div className=' w-full px-6'>
            <motion.div
              className='animated-div'
              initial={{ x: 50 }}
              animate={{ x: -10 }}
              transition={{ duration: 1 }}
            >
              <div className=''>
                <p className='text-sm font-bold text-secondary'>
                  BOOK THE PRODUCTS
                </p>
                <div className='flex lg:flex sm pt-4 text-3xl lg:text-5xl'>
                  <p className=' text-secondary  font-bold'>ATC Chain </p>
                  <p className='pl-2  text-[#1B1C57] font-bold'>Products</p>
                </div>

                <p className='text-md pt-5 text-text-gray'>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual{' '}
                </p>
              </div>

              <div>
                {/* // initial={{ x: 10 }}
        // animate={{ x: 5 }}
        // transition={{ duration: 5 }} */}
                {/* <motion.div
                animate={{
                  x: 1,
                  y: -1,
                  scale: 0.9,
                  rotate: 0
                }}
              > */}

                <form
                  className='mt-16 lg:mr-20  mx-0'
                  onSubmit={handleSubmit(contactFormDataHandle)}
                >
                  <div className='grid gap-4 mb-8 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1'>
                    <div>
                      <p className=''>NAME</p>
                      <input
                        {...register('first_name', {
                          required: 'Please enter your name',
                          maxLength: 100
                        })}
                        type='text'
                        placeholder='Enter your name..'
                        className='rounded-xl h-14 w-full focus:ring-primary flex mt-3 border-gray-200   '
                      ></input>
                      {errors.first_name && (
                        <span className='text-red-500'>
                          {errors.first_name.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <p>EMAIL ADDRESS</p>
                      <input
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Enter a valid email'
                          }
                        })}
                        type='text'
                        placeholder='Enter your name..'
                        className='rounded-xl h-14 mt-3 focus:ring-primary  border-gray-200 w-full'
                      ></input>
                      {errors.email && (
                        <span className='text-red-500'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='grid gap-4 mb-8 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1'>
                    <div>
                      <p>PHONE NO.</p>
                      <input
                        {...register('phone_number', {
                          required: 'Please enter your phone no.',
                          pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: 'Enter a valid phone no.'
                          },
                          valueAsNumber: true
                        })}
                        maxlength='10'
                        type='number'
                        placeholder='Enter your phone no.'
                        className='rounded-xl h-14 mt-3 focus:ring-primary  border-gray-200 w-full'
                      ></input>
                      {errors.phone_number && (
                        <span className='text-red-500'>
                          {errors.phone_number.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className=''>COMPANY NAME</p>
                      <input
                        {...register('company', {
                          required: 'Please enter your company name',
                          maxLength: 100
                        })}
                        type='text'
                        placeholder='Enter your company name.'
                        className='rounded-xl h-14 w-full focus:ring-primary flex mt-3 border-gray-200   '
                      ></input>
                      {errors.company && (
                        <span className='text-red-500'>
                          {errors.company.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className=''>MESSAGES</p>
                  <textarea
                    {...register('message', {
                      required: 'Write something',
                      maxLength: 5000
                    })}
                    type='text'
                    rows={6}
                    placeholder='Enter your messages..'
                    className='rounded-lg w-full  focus:ring-primary border-gray-200'
                  ></textarea>
                  {errors.message && (
                    <span className='text-red-500'>
                      {errors.message.message}
                    </span>
                  )}
                  <div className='flex items-center my-8'>
                    <div className='w-full hidden lg:block'>
                      <div className='py-4 mt-lg w-full  rounded-[30px] flex labelChips'>
                        <span className='self-center  p-2 bg-purple-600/20 rounded-xl border-2 border-purple-300'>
                          <p className='p-2 bg-purple-700 rounded-xl'>
                            <CallingIcon />
                          </p>
                        </span>
                        <div>
                          <p className='pt-2 ml-2 text-purple-800 font-bold'>
                            Mobile Number
                          </p>
                          <p className='ml-2'>03 482 394 123</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full'>
                      <button
                        disabled={isLoading}
                        type='submit'
                        className='bg-orange-500 w-full  text-white rounded-lg p-[13.5px]'
                      >
                        {isLoading ? 'loading...' : 'send Inquiry'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  )
}

export default ContactForm
