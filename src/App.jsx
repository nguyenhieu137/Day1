import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import Hero from './components/Hero/Hero';
import OwlCarousel from './components/OwlCarousel/OwlCarousel'
import Accordionn from './components/Accordion/Accordion'
import Contact from './components/Contact/Contact'

function App() {
  React.useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <>
      <Navbar />
      <Hero/>
      <OwlCarousel/>
      <Accordionn/>
      <Contact/>
    </>
  )
}

export default App
