import React from 'react'
import styled from 'styled-components'
import'../App.css'
const Navbar = () => {
  return (
    <Container>
  <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Chouella</div>
        <span>toggle</span>
    </div>
 <div className="n-right">
    <div className="n-List">
    <ul className="ul" style={{listStyleType: 'none'}}>
       
            <li>Home</li>
             <li>Services</li>
           <li>Projects</li>
    </ul>
    </div>
    <button className="button n-button">
        Contact 
    </button>
 </div>
  </div>
    </Container>
  
  )
}

const Container= styled.div`
.n-wrapper{
    height: 10vh;
    display: flex;
    justify-content: space-between;
}
.n-left{
    flex:1;
   display:flex;
   align-items: center;
   gap:2rem;
}
.n-name{
    font-size: 1.3rem;
    font-weight:bold;
}
.n-right{
    display: flex;
    flex:1;
    align-items:center;
    justify-content:center;
    font-weight:400;

}
.n-List{
    flex:10;
 margin-left:90px;


}

.ul{
display:flex;
        gap:2rem;
       
   }
.ul>li:hover{
cursor:pointer;
    color:#EB1D36;
    }
.n-button{
    flex:3;
 
}

`

export default Navbar