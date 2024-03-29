import React from 'react'
import styled from 'styled-components'
import'../App.css'
import Chousnellor from '../img/Chousnellor.png'
import Gechou from '../img/Gechou.png'
import weshare from '../img/weshare.png'
import { Swiper,SwiperSlide } from 'swiper/react'
import GoTo from '../img/GoTo.png'
import 'swiper/css';
import {themeContext} from '../Context'
import { useContext } from'react'

const Project = () => {
   const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
<div className="Projects" id="Project">
{/* heading */}
<span
 style={
    {
     
      color: darkMode? 'white': ''
    } }>Recent Projets</span>
<span>Portolio</span>
{/* slider */}
<Swiper
spaceBetween={30}
slidesPerView={1}
grabCursor={true}
className={'Projects-slider'}

breakpoints={{
  920: {
  slidesPerView:3,
  spaceBetween:30,
  grabCursor:true
 },
  800:{
slidesPerView:2,
spaceBetween:10,
  grabCursor:true
 },

  
}}


  


>
  <SwiperSlide className='card'>
<img src={Chousnellor}  className="card_image"  alt=""/>
<div className="card_desc">
<span>Chousnellor</span>
<p style={
    {
     
      color: darkMode? 'white': ''
    } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntu</p>
<a  href='http://chousnellor.herokuapp.com/' style={{textDecoration: 'none'}}>
  <button  className="button p-button">
     <img src={GoTo}/>Go To</button>
    </a>
</div>
  </SwiperSlide>
   <SwiperSlide className='card'>
 <img src={Gechou} className="card_image" alt="" />
<div className="card_desc">
 
<span>Gechou</span>
<p style={
    {
     
      color: darkMode? 'white': ''
    } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur 
</p>
<a  href='' style={{textDecoration: 'none'}}>
  <button  className="button p-button" >
      <img src={GoTo}/>Go To</button>
    </a>
    </div>
  </SwiperSlide>


   <SwiperSlide className="card" >
  <img src={weshare}    alt=""/>
<div className="card_desc">

<span>WeShare</span>
<p style={
    {
     
      color: darkMode? 'white': ''
    } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur 
</p>

  <a href='https://quiet-shape-6288.on.fleek.co/' style={{textDecoration: 'none'}}>
  <button  className="button p-button">
    <img src={GoTo}/>
    Go To</button>
</a>

 
</div>
  </SwiperSlide>


  <SwiperSlide className="card">
      <img src={Gechou}  alt=""/>
<div className="card_desc">
  
<span>Gechou</span>
<p style={
    {
     
      color: darkMode? 'white': ''
    } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi consequuntur</p>
<a  href='' style={{textDecoration: 'none'}}>
  <button className="button p-button">
    <img src={GoTo}/>
    Go To</button>
    </a>
</div>

  </SwiperSlide>
</Swiper>
</div>
    </Container>
   
  )
}
const Container=styled.div`
.Projects{
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;


}
.Projects span:nth-of-type(1){
  color: black;
  font-size:2rem;
  font-weight:bold;
}
.Projects span:nth-of-type(2){
  color:#dc4848;
  font-size: 2.5rem;
  font-weight:bold;
}
.card {
  width:250px;
   background: rgba(255, 255, 255, 0.66);
    border-radius: 20px;
    padding: 0px 0px 1rem 0px;
gap:30px;

p{
  color: gray;
    font-size: 14px;
}
}
.card:hover{
  transform:scale(1.2);
  transition:300ms ease-in;

}

.card span:nth-of-type(1){
color: black;
  font-size:30px;
  font-weight:bold;
}
.card_desc{
margin:20px;
display:flex;
flex-direction:column;
img{
  width:10px;
}
}


.Projects .swiper{
  overflow :visible !important;
}
.Projects-slider{
  margin-top:3rem;
  width:100%;

}
.Projects-slider .swiper-slider{
  width:20rem;
}

.Projects img{
  width:20rem;
      border-radius: 10px;
}
.p-button {
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-item:center;
    box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: none;
    padding-left:17px;
   padding-right:17px;
   padding-top:10px;
   padding-bottom:10px;
    font-size: 15px;
position:relative;
left:270px;
gap:10px;


img{
  width:20px;
}

}
 


.p-button:hover {
    transform: scale(1.1);
    cursor: pointer;
     border: 1px solid #dc4848;

}


 @media screen and (min-width:550px)and(max-width:830px){
  .card_image{
   
      width:1rem;

  
 }
 .p-button{
  margin-left: 500px;
  
 }
`
export default Project