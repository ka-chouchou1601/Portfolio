import React from 'react'

import Navbar from '../Components/Navbar'
import Intro from '../Components/Intro'
import Services from '../Components/Services/Services'
import Project from '../Components/Project'
import Tools from '../Components/Tools'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import {themeContext} from '../Context'
import { useContext } from'react'
import'../App.css'
const Home = () => {
  const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
      
   <div className="App"
   style={
    {
      background: darkMode?'black' : '',
      color: darkMode? 'white': ''
    }
   }
   >

    <Navbar/>
    <Intro/>
    <Services/>
    
    <Tools/>
    <Project/> 
    <Contact/>
     <Footer/>
    </div>

   
 
  )
}

export default Home