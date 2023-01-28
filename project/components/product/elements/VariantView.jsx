import React from 'react'
import { CubeIcon } from '../../../public/assets/icons/icons'

const VariantView = () => {
  return (
    <div className='flex  rounded-lg bg-gray-500/30'>
      <div className='bg-white w-full mx-auto '>
      <img className='mx-auto' src='/assets/images/products/image 39.png'/>
      </div>
  
            <div className="bg-primary rounded-lg mx-auto w-full mb-4 p-8 text-white">  
            <div className="py-4">
              <h1 className="font-bold text-2xl">
                CAP ELECATOR CHAIN 120X9 MM
              </h1>
            </div>
           
            <div>
              <div className="flex gap-4 mb-5">
                <div className="flex gap-4 items-center w-full">
                  <div className="bg-white p-3 rounded-lg">
                    <CubeIcon />
                  </div>
                  <div>
                    <h5>Pitch</h5>
                    <p>50 mm</p>
                    <p></p>
                  </div>
                </div>
                <div className="flex gap-4 items-center w-full">
                  <div className="bg-white p-3 rounded-lg">
                    <CubeIcon />
                  </div>
                  <div>
                    <h5>Pitch</h5>
                    <p>50 mm</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-4 items-center w-full">
                  <div className="bg-white p-3 rounded-lg">
                    <CubeIcon />
                  </div>
                  <div>
                    <h5>Pitch</h5>
                    <p>50 mm</p>
                    <p></p>
                  </div>
                </div>
               
              </div>
            </div>
         
            </div>
          
    </div>
  )
}

export default VariantView
