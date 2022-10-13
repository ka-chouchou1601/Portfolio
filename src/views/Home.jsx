import React from 'react'

import Navbar from'../Components/Navbar'
import Intro from'../Components/Intro'
import Services from'../Components/Services/Services'
import Project from'../Components/Project'
import Tools from'../Components/Tools'
import Contact from'../Components/Contact'
import'../App.css'
const Home = () => {
  return (
   
      
   <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    
    <Tools/>
    <Project/> 
    <Contact/>
     
    </div>

   
 
  )
}

export default Home