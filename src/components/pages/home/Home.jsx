import AboutUs from 'components/about-us/AboutUs'
import ProjectCarousel from 'components/projectCarousel/ProjectCarousel'
import WhyChooseUs from 'components/whyChooseUs/WhyChooseUs'
import React from 'react'
import Clients from '../../clients/Clients'
import Hero from '../../hero/Hero'

const Home = () => {
  return (
    <div className="row">
      <Hero />
      <Clients />
      <AboutUs />
      <WhyChooseUs/>
      <ProjectCarousel/>
    </div>
  )
}

export default Home