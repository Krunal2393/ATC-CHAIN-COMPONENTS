import React from 'react'

const productQuery = () => {
  return (
    <div className=' flex pt-8 flex-col md:flex-row '>
      <div className=''>
        <div className=''>
          <div className='absolute p-6 m-[140px] mt-[680px] bg-white rounded-[30px] flex    labelChips'>
            <img
              src='./assets/images/Home.png '
              className='self-center  p-1 bg-purple-600 rounded-lg border-4 border-b-purple-300 '
              alt=''
            />
            <p className='p-1.5 text-purple-900 h-[34px] md:h-[60px] w-[269px] md:w-[269px]'>
              35 West Dental Street California 1004
            </p>
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470011.9977177791!2d71.99947066605088!3d23.02492025099335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859b38e8f00d%3A0xeb3878996e5277d1!2sOTFCODER!5e0!3m2!1sen!2sin!4v1671797033961!5m2!1sen!2sin'
            className='h-[827px]  w-[637px] rounded-[60px] ml-6 p-6'
          ></iframe>
        </div>

        <div></div>
      </div>

      <div className='p-6'>
        <div className=''>
          <p className='text-xs text-purple-800'>BOOK THE PRODUCTS</p>
          <div className='flex pt-5'>
            <p className=' text-primary text-2xl font-bold'>ATC Chain </p>
            <p className='pl-2 text-2xl text-[#1B1C57] font-bold'>Products</p>
          </div>

          <p className='text-xs pt-5'>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual{' '}
          </p>
        </div>

        <div>
          <form className='pt-[75px]'>
            <div className='grid gap-2 mb-3 md:grid-cols-2'>
              <div>
                <p>NAME</p>
                <input
                  type='text'
                  placeholder='Enter your name..'
                  className='rounded-lg flex mt-3 border-gray-200 w-[620px] md:w-[250px] '
                ></input>
              </div>
              <div>
                <p>EMAIL ADDRESS</p>
                <input
                  type='text'
                  placeholder='Enter your name..'
                  className='rounded-lg mt-3  border-gray-200 w-[620px] md:w-[250px]'
                ></input>
              </div>
            </div>
            <p className='mt-[25px]'>MESSAGES</p>
            <input
              type='text'
              placeholder='Enter your messages..'
              className='rounded-lg h-[200px] w-[620px]  border-gray-200'
            ></input>
          </form>
        </div>
        <div className='flex'>
          <div className='absolute p-6 mt-[125px]  bg-white rounded-[30px]  flex labelChips'>
            <img
              src='./assets/images/Calling.png '
              className='self-center  p-4 bg-purple-600 rounded-lg border-4 border-b-purple-300'
              alt=''
            />
            <div>
              <p className='pt-2 ml-2'>Mobile Number</p>
              <p className='ml-2'>03 482 394 123</p>
            </div>
          </div>
          <div className='pl-[400px] pt-8'>
            <button
              type='button'
              className='bg-orange-500 mt-[125px] text-white rounded-lg p-[13.5px]'
            >
              send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default productQuery
