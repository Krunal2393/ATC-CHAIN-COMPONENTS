import React from 'react'
import SubProducts from './SubProduct'

const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Embecarsoul = () => {
  return (
    <div>
      <SubProducts slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Embecarsoul
