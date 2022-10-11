import React from 'react'
import styled from 'styled-components'
import Navbar from'../Components/Navbar'
import Intro from'../Components/Intro'
import Services from'../Components/Services/Services'
import Project from'../Components/Project'
import'../App.css'
const Home = () => {
  return (
    <Container>
      
   <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Project/>
   
    </div>
    </Container>
 
  )
}
const Container= styled.div`

`
export default Home