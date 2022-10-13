import React from 'react'
import styled from 'styled-components'
import'../App.css'
import react from'../img/react.png'
import node from'../img/node.svg'
import mongodb from '../img/mongodb.png'
import javascript from '../img/javascript.png'
import express from'../img/express.svg'

const Tools = () => {
  return (
    <Container>
 <div className="Tools">
  {/* left side */}
     <div className="awesome">
    <span>Languages&</span>
     <span>Libraries</span>
     <span>Lorem ipsum dolor sit amet consectetur adipisicing  iusto fuga praesentium
      <br/>
 iusto fuga praesentium optio, eaque rerum! Provident rerum!  praesentium </span>

 {/* <a >
  <button className="button s-button">Hire me</button>
 </a> */}

  <div className="blur s-blur" style={{
    background: "#ABF1FF94"

  }}></div>
  </div>

  {/* right side */}
<div className="T-right">
<div className="T-mainCircle">
<div className="T-seCircle">
<img src={react} alt=''/>
</div>
<div className="T-seCircle">
<img src={javascript} alt=''/>
</div>
<div className="T-seCircle">
<img src={express} alt=''/>
</div>
<div className="T-seCircle">
<img src={node} alt=''/>
</div>
<div className="T-seCircle mongo">
<img src={mongodb} alt=''/>
</div>
</div>





</div>
 </div>
    </Container>
   
  )
}
const Container= styled.div`
.Tools{
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
.T-right{
  position:relative;

}
.T-mainCircle{
left:9rem;
position:relative;
width:18rem;
height:18rem;
border: 4px solid #dc4848;
border-radius:100%;
box-shadow:-79px 51px 60px rgba(0, 0, 0, 0.08);
top:2rem;
background:rgba(255, 255, 255, 0.12);
}
.T-mainCircle>*{
  position:absolute;
}
.T-mainCircle >:nth-child(1){
  Top:-2rem;
  Left:6.5rem;

}
.T-mainCircle>:nth-child(2){
  Top:145px;
  Left:-47px;
  
}
.T-mainCircle>:nth-child(3){
  Top:145px;
  Left:135px;
  background:#dc4848;
  border:none;
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.6));
  
}
.T-mainCircle>:nth-child(4){
  Top:7rem;
  Left:15.5rem;
  
}

.T-mainCircle>:nth-child(5){
  Top:15rem;
  Left:7rem;
  
  
}
.T-seCircle{
  width:5rem;
  height:5rem;
  position:absolute;
  border-radius:100%;
  border: 5px solid rgba(255, 255, 255, 0.15) ;
  display:flex;
  align-items:center;
  justify-content:center;
  background:none;
  background:#f8e7d4 ;
}



`
export default Tools