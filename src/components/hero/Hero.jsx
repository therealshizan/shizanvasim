import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='content' id='hero'>
        <div className='heroFirst'>
        <p className='designation'>Frontend Developer</p>
        <h2 className='heroHeading'>Inspire<br />Through<br />Design</h2>
      </div>
      <div className='heroSecond'>
        <p className='heroTagline'>Web design with a human touch</p>
        <a className='heroReadMore readMore' href="/"><span>Read More</span></a>
      </div>
    </div>
  )
}

export default Hero