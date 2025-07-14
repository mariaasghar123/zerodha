import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OPenAccount from '../OPenAccount'
import Footer from '../Footer'

export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OPenAccount/>
    </div>
  )
}
