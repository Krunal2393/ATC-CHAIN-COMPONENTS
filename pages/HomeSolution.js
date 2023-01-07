import React, { useEffect, useState } from 'react'
import { svgShaps, svgShapes, SvgPlay } from '../public/assets/shapes'

const HomeSolution = () => {
  const [selected, setSelected] = React.useState({
    one_dp: {},
    two_dp: {},

    one_dp_isSelected: false,
    two_dp_isSelected: false
  })

  const [data, setData] = useState([
    {
      label: 'My Industries Is',
      value: 'My Industries Is',
      disabled: false
    },
    {
      label: 'I need a solution for',
      value: 'I need a solution for',
      disabled: false
    },
    {
      label: 'Find My Solutions',
      value: 'Find My Solutions',
      disabled: false
    },
    {
      label: 'Others',
      value: 'Others',
      disabled: false
    }
  ])

  if (selected === 'My industries Is') {
    type = label
  }

  useEffect(() => {
    console.log(selected)
    const tmpData = data.map(el => {
      if (selected.one_dp_isSelected && selected.one_dp === el.value) {
        return {
          ...el,
          disabled: true
        }
      } else if (selected.two_dp_isSelected && selected.two_dp === el.value) {
        return {
          ...el,
          disabled: true
        }
      } else {
        return { ...el, disabled: false }
      }
    })

    console.log('tmp data ==> ', tmpData)

    setData(tmpData)
  }, [selected])

  return (
    <>
      <div className='flex flex-col md:flex-row  '>
        <img src='./assets/images/bcgsolution.svg ' className='w-full' alt='' />
        <div className='contanctDiv absolute flex flex-col-reverse md:flex-row gap-6'>
          <div className='md:-m-2'>
            <div>
              <select
                className='absolute border-transparent ml-12 xl:ml-16 mt-12 lg:mt-[4.5rem] xl:mt-24 pr-28 xl:pr-64 bg-transparent text-primary    font-bold    text-center  items-center '
                onChange={event =>
                  setSelected(prev => ({
                    ...prev,
                    one_dp: event.target.value,
                    one_dp_isSelected: true,
                    two_dp_isSelected: false
                  }))
                }
              >
                {data.map((e, i) => (
                  <option disabled={e.disabled} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='  md:w-96 lg:w-[31rem] xl:w-[41rem]'>
              {svgShaps.shap_one}
            </div>

            <div className=''>
              <select
                className='absolute border-transparent  ml-12 xl:ml-16 mt-12 lg:mt-16 xl:mt-24 pr-28 xl:pr-64  bg-transparent text-primary    font-bold    py-2.5 text-center  items-center '
                onChange={event =>
                  setSelected(prev => ({
                    ...prev,
                    two_dp: event.target.value,
                    one_dp_isSelected: false,
                    two_dp_isSelected: true
                  }))
                }
              >
                {data.map((e, i) => (
                  <option disabled={e.disabled} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <div className=' sm:w-full'>{svgShapes.shap_two}</div>
            </div>
            <div>
              <div className='absolute flex ml-7 mt-16 lg:mt-20 xl:mt-28  pl-10 font-bold'>
                <p>Find My Solutions</p>

                <a href='https://atcchain.com/ ' className=' ml-24 xl:ml-64'>
                  <SvgPlay />
                </a>
              </div>
              <div className='md:mt-[-4] sm:w-full'>{svgShaps.shap_one}</div>
            </div>
          </div>

          <div className='text-white pl-10    md:mt-36 lg:mt-[17rem] '>
            <p className='font-semibold mt-7'>SOLUTION</p>
            <p className='font-bold mt-4 '>Make your conveyor</p>
            <p className='mt-3 pr-4   '>
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
{
  /* <div className='  top-28 w-full   '>
              <select
                id='countries'
                class='absolute border-transparent  pl-10 p-60 m-20 bg-transparent text-primary    font-bold    py-2.5 text-center  items-center '
              >
                <option selected>My Industries Is</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
              {svgShaps.shap_one}
            </div>

            <div className='   '>
              <select
                id='countries'
                class='absolute border-transparent  pl-11 p-[13rem] m-20 bg-transparent text-primary    font-bold    py-2.5 text-center  items-center '
              >
                <option selected>I need a solution for</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>

              {svgShapes.shap_two}
            </div> */
}
