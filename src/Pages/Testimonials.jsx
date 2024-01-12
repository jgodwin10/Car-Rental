import React from 'react'
import Footer from '../Components/Footer'
import BannerContact from '../Components/BannerContact'
import Testimonial from '../Components/Testimonial'
import HeroPages from '../Components/HeroPages'

const Testimonials = () => {
  return (
    <div>
      <HeroPages title='Testimonials' />
      <Testimonial />
      <BannerContact />
      <Footer />
    </div>
  )
}

export default Testimonials
