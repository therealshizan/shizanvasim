import AboutUs from 'components/about-us/AboutUs'
import Footer from 'components/footer/Footer'
import Greet from 'components/greet/Greet'
import ProjectCarousel from 'components/projectCarousel/ProjectCarousel'
import WhyChooseUs from 'components/whyChooseUs/WhyChooseUs'
import React from 'react'
import Clients from '../../clients/Clients'
import Hero from '../../hero/Hero'
// import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div className="row" id='home-page'>
      <Hero />
      <Clients />
      <AboutUs />
      <WhyChooseUs/>
      <ProjectCarousel/>
      <Greet/>
      <Footer/>
      {/* <Greet/> */}
    </div>
  )
}

export default Home