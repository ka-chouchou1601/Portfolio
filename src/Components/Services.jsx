import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import happyE3 from'../img/happyE3.svg'
const Services = () => {
  return (
    <Container>
 <div className="Services">
  {/* this is the left side */}
  <div className="awesome">
    <span>My Awesome</span>
     <span>Services</span>
     <span>Lorem ipsum dolor sit amet consectetur adipisicing  iusto fuga praesentium
      <br/>
 iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. </span>
  <button className="button s-button">Download cv</button>
  <div className="blur s-blur" style={{
    background: "#ABF1FF94"

  }}></div>
  </div>
{/* this is the right side */}
<div>
 <div>
  <Card 
  emoji={happyE3}
  heading={'Front end development'}
  details={"React, javascript,css,chackra Ui, Styled Components"}
  />
 </div>
 <div>
  <Card 
  emoji={happyE3}
  heading={'Back-end development'}
  details={"React, javascript,css,chackra Ui, Styled Components"}
  />
 </div>
</div>
 </div>
    </Container>
   
  )
}
const Container= styled.div`
.Services{
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
.s-button{
  width:8rem;
  height:2rem;
  margin-top:5px;
}
`
export default Services