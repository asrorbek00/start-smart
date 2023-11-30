import React from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import About from './components/About'
import OurWorks from './components/OurWorks'
import OurTeam from './components/OurTeam'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Heading/>
      <Services/>
      <AboutMe/>
      <About/>
      <OurWorks/>
      <OurTeam/>
    </div>
  )
}

export default App