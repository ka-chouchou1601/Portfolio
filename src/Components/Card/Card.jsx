import React from 'react'
import'./Card.css'

const Card = ({emoji,heading,details}) => {

  return (
  <div ClassName="card">
    <img src={emoji} />
    <p>{heading}</p>
<p>{details}</p>

 <button className="c-button">LEARN MORE</button>
    </div>
   
  
  )
}

export default Card