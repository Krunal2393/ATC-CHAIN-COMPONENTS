import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a className='w-full h-20'>
          <img src={'/assets/images/products/image 39.png'} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className='flex items-center justify-center'>
        <img
          className=' mx-auto max-w-xl h-96'
          src={'/assets/images/products/image 39.png'}
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          className='mx-auto max-w-lg h-96'
          src={'/assets/images/products/image 39.png'}
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          className=' mx-auto max-w-lg h-96 '
          src={'/assets/images/products/image 39.png'}
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          className='mx-auto max-w-lg h-96 '
          src={'/assets/images/products/image 39.png'}
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          className='mx-auto max-w-lg h-96 '
          src={'/assets/images/products/image 39.png'}
        />
      </div>
    </Slider>
  );
};

export default CustomSlider;
