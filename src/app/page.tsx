import React from 'react'

import Nav from './components/navbar'
import Footerr from './components/footer'
import HomePage from './components/home'

const Home = () => {
  return (
    <div className='bg-black'>
      
    <Nav/>
    <HomePage/>
    <Footerr/>
    </div>
  )
}

export default Home