import React from 'react'
import Hero from '../home/Hero'
import AboutPreview from '../home/AboutPreview'
import Services from '../home/Services'
import WhyChoose from '../home/WhyChoose'
import ClientsPanel from '../home/ClientsPanel'
import GalleryPreview from '../home/GalleryPreview'
import Reviews from '../home/Reviews'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChoose/>
      <ClientsPanel/>
      <GalleryPreview/>
      <Reviews/>
    </div>
  )
}

export default Home
