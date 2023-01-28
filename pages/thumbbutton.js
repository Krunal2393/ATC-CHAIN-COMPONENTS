import React from 'react'

export const Thumb = props => {
  const { selected, imgSrc, index, onClick } = props

  const slides = [
    {
      image: '/assets/images/product1.png',
      name: 'food'
    }
  ]

  return (
    <div
      key={`ind_${index}`}
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--    ' : ''
      )}
    >
      <button
        onClick={onClick}
        className='embla-thumbs__slide__button'
        type='button'
      >
        <div className='embla-thumbs__slide__number'>
          <span className='absolute bg-gray-100'>{index + 1}</span>
        </div>
        {slides.map((product, index) => (
          <img
            key={`index_img_${index}`}
            className=''
            // 'object-center object-cover h-full w-full rounded-t-lg'
            src={
              product.image
              // product?.image_1920 && product?.image_1920
              //   ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
              //       product?.image_1920
              //         ? product?.image_1920
              //         : product?.image_url
              //     }`
              // : '/assets/images/product2.png'
            }
            alt={product?.name}
          />
        ))}
      </button>
    </div>
  )
}
