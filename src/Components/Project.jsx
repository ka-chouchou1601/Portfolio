import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import glassesimoji from'../img/glassesimoji.png'

const Project = () => {
  return (
<Container>
<div className="Projects">
  {/* this is the left side */}
  <div className="awesome">
    <span>My Awesome</span>
     <span>Projects</span>
     


  


  <div className="blur s-blur" style={{
    background: "#ABF1FF94"

  }}></div>
  </div>
{/* this is the right side */}
<div className='Cards'>
 <div  className="Cards_1">
  <Card
  emoji={ glassesimoji}
  heading={'Front end developer'}
  details={"React, javascript,css,chackra Ui, Styled Components"}
  />
 </div>
 {/* my second card */}
  <div className="Cards_2" >
  <Card 
  emoji={ glassesimoji}
  heading={'Back end developer'}
  details={"Node.js, express, MongoDB"}
  />
 </div> 
 
</div>
 </div>

</Container>
    
  )
}
const Container= styled.div`
.Projects{
  padding : 0 2rem 2rem;
  display: flex;
  height: 90vh;
  margin-bottom: 8rem;
  margin-top: 7rem;
 
}

.awesome{
  display:flex;
  flex-direction: column;
  position:relative;
   gap:1rem;
}

.awesome>:nth-child(1) {
  color : black ;
  font-size:3rem;
  font-weight:bold;
}

.awesome>:nth-child(2) {
  color : #dc4848 ;
  font-size:3rem;
  font-weight:bold;
}
.awesome>:nth-child(3) {
  font-weight:200;
  color : gray ;
  font-size:16px;
  margin-top:10px;
  
}
.p-button{
  width:8rem;
  height:2rem;
  margin-top:5px;
}
. Cards{
  display:flex;
  flex-direction: column;
  position : absolute;
 
  gap:20rem;
}
.Cards_1{
  position:absolute;
  left: 69%;

  
}
.Cards_2{
  position:relative;
   
  left:-4rem;
  top:15rem;
}
`
export default Project