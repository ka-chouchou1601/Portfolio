import React from 'react'
import styled from 'styled-components'
import'../App.css'
import FloatingDiv from './FloatingDiv'

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
     <img src='img/Github1.svg' />
  </a>
    <a href='https://www.instagram.com/kchouella/'>
      <img src='img/Insta.svg' />
    </a>
<a href='https://www.linkedin.com/in/kanyonga-chouella-6790911a8/'>
<img src='img/LinkedIn1.svg' />
</a>

</div>

</div>
<div className="i-right">

  <img className="i-picture" src="img/chouella'spic.svg"/>
<div>
<FloatingDiv/>
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
    font-size: 14px;
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
  right:70px;
  top:-20px;
}


`

export default intro