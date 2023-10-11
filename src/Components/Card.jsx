import React from 'react'
import styled from 'styled-components'
import '../App.css'
const Card = ({emoji,heading,details}) => {
  return (
    <Container>
<div className="card">
    <img src={emoji} />
    <span>{heading}</span>
<span>{details}</span>

 <button className="button c-button">LEARN MORE</button>
    </div>
   
    </Container>
  
  
  )
}
const Container= styled.div`
.card {
    width: 10rem;
    height: 12rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10rem;
    text-align: center;
   background: rgba(255, 255, 255, 0.26);
    border: 4px solid #dc4848;
    border-radius: 20px;
    padding: 0px 26px 2rem 26px;
gap:10px;
    img{
        width:10rem;
          transform: scale(0.6);
    margin-bottom: -3rem;
    }
}

.card span:nth-of-type(2) {
    color: #788097;
    font-size: 16px;
    
}



.c-button {
    box-shadow: 0px 19px 60px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: none;
    padding: 10px;
    font-size: 15px;
    
}

.c-button:hover {
    transform: scale(1.1);
    cursor: pointer;
}
@media screen and (max-width: 1000px){
  .card{
    width: auto;
  }
}
`
export default Card