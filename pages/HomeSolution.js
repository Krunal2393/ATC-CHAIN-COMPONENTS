import React from 'react'
import { svgShaps, svgShapes } from '../public/assets/shapes'

const HomeSolution = () => {
  return (
    <>
      <div className='flex flex-col p-5'>
        <img src='./assets/images/bcgsolution.svg ' className='w-full' alt='' />

        <div className='contanctDiv absolute flex gap-6 '>
          <div>
            <div className='  top-28 w-full   '>
              <button
                datadropdowntoggle='dropdownDivider'
                className=' absolute  m-20 pl-10 text-primary  focus:outline-none  font-bold rounded-lg  px-4 py-2.5 text-center inline-flex items-center '
                type='button'
              >
                {' '}
                My industries is{' '}
                <svg
                  className='ml-64 w-4 h-4'
                  ariahidden='true'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </button>

              <div
                id='dropdownDivider'
                className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
              >
                <ul
                  className='py-1 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownDividerButton'
                >
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className='py-1'>
                  <a
                    href='#'
                    className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Separated link
                  </a>
                </div>
              </div>
              {svgShaps.shap_one}
            </div>

            <div className='   '>{svgShapes.shap_two}</div>
            <div className='absolute  pt-1 '>{svgShaps.shap_one}</div>
          </div>
          <p className='absolute'>hiii</p>
          <div className='text-white pl-5 mt-96 w-full '>
            <p className='font-semibold'>SOLUTION</p>
            <p className='font-bold mt-8 '>Make your conveyor</p>
            <p className='mt-10 pr-4  '>
              We got alot of Message With the same Questions so here are some
              fast answer for populare Question
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSolution

{
  /* < button  data - dropdown - toggle="dropdownDivider" className = " absolute  m-20 pl-10 text-primary  focus:outline-none  font-bold rounded-lg  px-4 py-2.5 text-center inline-flex items-center " type = "button" > My industries is < svg className = "ml-64 w-4 h-4" aria - hidden="true" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" xmlns = "http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></ ></button >

    <div id="dropdownDivider" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
        </ul>
        <div className="py-1">
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
        </div>
    </div> */
}
