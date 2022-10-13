import React from 'react'
import styled from 'styled-components'
import'../App.css'
import Chousnellor from '../img/Chousnellor.png'
import Gechou from '../img/Gechou.png'
import weshare from '../img/weshare.png'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
const Project = () => {
  return (
    <Container>
<div className="Projects">
{/* heading */}
<span>Recent Projets</span>
<span>Portolio</span>
{/* slider */}
<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className={'Projects-slider'}
>
  <SwiperSlide className='card'>
<img src={Chousnellor} alt=""/>
<span>chousnellor</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem</p>
<a  href='http://chousnellor.herokuapp.com/'>
  <button  className="button P-button">Go to</button>
    </a>

  </SwiperSlide>
   <SwiperSlide className='card'>
<img src={Gechou} alt="" />
<span>Gechou</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem</p>
<a  href=''>
  <button  className="button P-button">Go to</button>
    </a>
  </SwiperSlide>
   <SwiperSlide className="card" >
<img src={weshare} alt=""/>

  <span>WeShare</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem</p>
 <a href='https://quiet-shape-6288.on.fleek.co/'>
  <button  className="button P-button">Go to</button>
</a>

  </SwiperSlide>
  <SwiperSlide className='card'>
<img src={Gechou} alt=""/>
<span>Gechou</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem</p>
<a  href=''>
  <button className="button P-button">Go to</button>
    </a>
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
   background: rgba(255, 255, 255, 0.36);
    
    border-radius: 20px;
    padding: 0px 15px 1rem 10px;
gap:10px;
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
    filter: drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25));
      border-radius: 10px;
}
`
export default Project