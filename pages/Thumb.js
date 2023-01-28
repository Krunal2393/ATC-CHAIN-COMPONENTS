import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './thumbbutton'

const EmblaCarousel = props => {
  const options = {}
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  // const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    index => {
      console.log('onclick test ankit')
      emblaMainApi.scrollTo(index)
      console.log('onclick test ankit')
      if (!emblaMainApi || !emblaThumbsApi) return
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])
  const slides = [
    {
      image: '/assets/images/product1.png',
      name: 'food'
    },
    {
      image: '/assets/images/product2.png',
      name: 'dinner'
    },
    {
      image: '/assets/images/product1.png',
      name: 'food'
    },
    {
      image: '/assets/images/product2.png',
      name: 'dinner'
    }
  ]
  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaMainRef}>
        <div className='embla__container'>
          {slides.map((product, index) => (
            <div className='embla__slide' key={`index_slider_${index}`}>
              <div className='embla__slide__number'>
                <span className='absolute bg-gray-50'>{index + 1}</span>
              </div>
              <img
                className='embla__slide__img'
                // 'object-center object-cover h-full w-full rounded-t-lg'
                src={
                  product.image
                  // product?.image_1920 && product?.image_1920
                  //   ? `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}${
                  //       product?.image_1920
                  //         ? product?.image_1920
                  //         : product?.image_url
                  //     }`
                  //   : '/assets/images/product1.png'
                }
                alt={product?.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='embla-thumbs'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='embla-thumbs__container'>
            {slides.map((product, index) => (
              <div key={`pro_${index}`}>
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
// imgSrc={productData.image}
export default EmblaCarousel
