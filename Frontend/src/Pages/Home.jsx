import React from 'react'
import SEO from '../common/SEO'
import Hero from '../home/Hero'
import AboutPreview from '../home/AboutPreview'
import Services from '../home/Services'
import WhyChoose from '../home/WhyChoose'
import ClientsPanel from '../home/ClientsPanel'
// import GalleryPreview from '../home/GalleryPreview'
import Reviews from '../home/Reviews'

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "name": "Ekalavya Event & Entertainment",
  "image": "https://www.ekalavyaevententertainment.com/logo.png",
  "@id": "https://www.ekalavyaevententertainment.com/#organization",
  "url": "https://www.ekalavyaevententertainment.com/",
  "telephone": "+919007744772",
  "email": "ekalavyaentertainmentkolkata@gmail.com",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "26/1, Bhagaban Chatterjee Ln, Bantra, Ichapur",
    "addressLocality": "Howrah",
    "addressRegion": "West Bengal",
    "postalCode": "711101",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.5807,
    "longitude": 88.3182
  },
  "sameAs": [
    "https://www.facebook.com/ekalavyaevententertainment",
    "https://www.instagram.com/ekalavyaevententertainment/"
  ]
};

const Home = () => {
  return (
    <div>
      <SEO
        title="Ekalavya Event & Entertainment | Best Event Management Company in Kolkata & Howrah"
        description="Premier event planning company in Kolkata & Howrah specializing in destination weddings, corporate events, decor & production, venue management, hospitality & celebrity coordination."
        keywords="Event management company in Kolkata, Best event planner Howrah, Destination wedding planner Kolkata, Corporate event organizer, Luxury event decor, Ekalavya Event Entertainment"
        canonicalPath="/"
        jsonLd={homeSchema}
      />
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChoose/>
      <ClientsPanel/>
      {/* <GalleryPreview/> */}
      <Reviews/>
    </div>
  )
}

export default Home
