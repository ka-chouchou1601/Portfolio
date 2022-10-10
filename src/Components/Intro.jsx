import React from 'react'
import styled from 'styled-components'
import'../App.css'
import FloatingDiv from './FloatingDiv'
import Crown from'../img/Crown.png'
import chouella3 from'../img/chouella3.svg'
import thumbup from'../img/thumbup.png'
import Github1 from'../img/Github1.svg'
import Insta from'../img/Insta.svg'
import LinkedIn1 from'../img/LinkedIn1.svg'

const intro = () => {
  return (
    <Container>
  <div className="intro">
<div className="i-left">
<div className="i-name">
  <span>Hey ! I Am  </span>  
   <span>Chouella Kanyonga </span> 
   <span>I am a full Stack developer, with experience in front end using React
     ,Javascript and Backend using Node.js,Express and MongoDB </span>
</div>
<button className='button i-button'>Hire me</button>
<div className="i-icons">
  <a href='https://github.com/ka-chouchou1601'>
     <img src={Github1} />
  </a>
    <a href='https://www.instagram.com/kchouella/'>
      <img src={Insta} />
    </a>
<a href='https://www.linkedin.com/in/kanyonga-chouella-6790911a8/'>
<img src={LinkedIn1} />
</a>

</div>

</div>
<div className="i-right">

  <img className="i-picture" src={chouella3}/>
<div style={{top: '15%', left:'69%'}}>
<FloatingDiv img={Crown} txt1={'Full Stack'} txt2={'developer'}/>
</div>
<div style={{top: '10rem', left:'4rem'}}>
  <FloatingDiv img={thumbup} txt1={' Let us '} txt2={'Work together'}/>
</div>
{/* <div className="emoji">
  <img src={emoji2}/>

</div> */}
<div className="blur" style={{background: "rgb (238 210 255)"}} >
<div className="blur" style={{
  background:'#FEE0C0',
  top: '20rem',
  left:'-29rem',
  width:'40rem',
  height:'10rem',
  
}}>

</div>
</div>
</div>
  </div>
    </Container>
  
  )
}
const Container=styled.div`
.intro{
    display:flex;
    height:77vh;
    margin-top:6rem;
}
.i-left{
    display:flex;
    position:relative;
    flex:1;
    flex-direction: column;
    gap:2rem;

}
.i-right{
    flex:1;
}
.i-name{
    display:flex;
    flex-direction:column;

}
.i-name>:nth-child(1){
    color: black;
    font-weight:bold;
    font-size: 3rem;
}
.i-name>:nth-child(2){
    color: #dc4848;
    font-weight:bold;
    font-size: 3rem;
}
.i-name>:nth-child(3){
    font-weight:100;
    font-size: 16px;
    color: gray;
    margin-top: 10px;
}
.i-button{
    width: 6rem;
    height:2rem;

}
.i-icons{
 margin-top: 1rem;
 display:flex;
gap: 1rem;

}
.i-icons>*:hover{
  cursor:pointer;
}
.i-right{
  flex:1;
  position:relative;

}
.i-right>*{
  position :absolute;
  z-index:1;
}
.i-picture{
  right:-50px;
  top:-40px;


}
.emoji{
  transform: scale(0.2);
  position: absolute;
  top:-60%;
  right:40%;

}
.blur{
  position:absolute;
  width:26rem;
  height:14 rem;
  border-radius: 50%;
  background:#dc4848;
  filter:blur(252px);
  z-index:-9;
  top:-18%;
  left:56%;
  filter: blur(82px);

}
`

export default intro