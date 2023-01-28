import React from 'react';

const BannerImage = ({ image, text, description }) => {
  return (
    <div>
      <section className='relative h-96  lg:h-[90vh] -mt-20 flex flex-col items-start  justify-evenly text-start text-white py-0 lg:px-20 sm:px-2 px-8'>
        <div className='video-docker rounded-b-3xl absolute bottom-0 top-0 left-0 w-full h-full overflow-hidden'>
          <img
            src={`${image ? image : '/assets/icons/svg/aboutPageBanner.png'}`}
            className='min-w-full min-h-full absolute object-cover  bg-center'
          />
          <div className='min-w-full min-h-full bg-[#120202] opacity-70 absolute object-cover'></div>
        </div>
        <div className='video-content z-0 w-full pt-28 md:w-full sm:full lg:w-[75vh]'>
          <h1 className='font-semibold tracking-widest lg:font-bold  2xl:text-6xl text-2xl text-white  lg:text-4xl sm:text-lg md:text-2xl'>
            {text
              ? text
              : '  Belting solutions set to fix all your customized needs.'}
          </h1>
          <div className=' lg:w-5/6 w-5/6 py-6 md:w-full'>
            <h3 className=' leading-[30px] text-lg lg:text-2xl text-white opacity-75'>
              {description
                ? description
                : 'Thriving in the manufacturing Industry, We build durable & robust machines which are built to last for generations'}
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerImage;
