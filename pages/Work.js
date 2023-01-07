import React from 'react'
import { Bootle } from '../public/assets/shapes'

const Work = () => {
  const workProduct = [
    {
      number: '1',
      title: 'Explore Products',
      text:
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices'
    },
    {
      number: '2',
      title: 'Explore Products',
      text:
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices'
    },
    {
      number: '3',
      title: 'Explore Products',
      text:
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices'
    },
    {
      number: '3',
      title: 'Explore Products',
      text:
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices'
    },
    {
      number: '3',
      title: 'Explore Products',
      text:
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices'
    }
  ]
  return (
    <>
      <div className='grid grid-row-2 sm:grid-cols-2 gap-6 mt-10'>
        <div className=' grid-rows-1 gap-6 m:5 mt-20 pl-5 sm:pl-10 sm:p-0'>
          <div className='space-y-4'>
            <p className='text-purple-800'>WORK</p>
            <p className='text-2xl text-purple-900'>How we Works</p>
            <p className='text-gray-600 '>
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Delta has 100+ integrations with tools you
              already use and love.
            </p>
          </div>
          <div className=' hidden sm:block mt-6 w-auto'>
            <Bootle />
          </div>
        </div>
        <div className='overflow-y-scroll p-5 h-[80vh] '>
          {workProduct &&
            workProduct.map(detail => (
              <>
                <div className='mt-16 '>
                  <div className='flex'>
                    <div class='h-10 w-10 border-2 rounded-[30px] p-2.5 pt-2 pl-3 border-blue-600'>
                      {detail.number}
                    </div>
                    <div className='ml-12 mt-2 text-xl text-primary'>
                      <div>{detail.title}</div>
                    </div>
                  </div>
                  <p className='mt-4 '>{detail.text}</p>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  )
}
export default Work
