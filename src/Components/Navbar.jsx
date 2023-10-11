import React from 'react'
import styled from 'styled-components'
import'../App.css'
import Toogle from'./Toogle.jsx'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <Container>
  <div className="n-wrapper" id='Navbar'>
    <div className="n-left">
        <div className="n-name">Chouella</div>
        <Toogle/>
    </div>
 <div className="n-right">
    <div className="n-List">
    <ul style={{listStyleType: 'none'}}>
       <Link spy={true} to="Navbar" smooth={true}activeClass="activeClass" className="Link">
 <li>Home</li>
       </Link>
            <Link spy={true} to="Services" smooth={true} className="Link"> 
             <li>Services</li>
             </Link>
           
              <Link spy={true} to="Project" smooth={true} className="Link">
                <li>Projects</li>
              </Link>
            <Link spy={true} to="Tools" smooth={true} className="Link">
               <li>Languages&Libraries</li>
            </Link>
          
    </ul>
    </div>
       <Link spy={true} to="contact" smooth={true} className="Link">
<button className="button n-button">
        Contact 
    </button>
       </Link>
    
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



}

.n-List > ul{
display:flex;
  gap: 2rem;
  margin-right: 4rem;
 cursor:pointer;
       
   }

.Link:hover{
cursor:pointer;
    color:#EB1D36;
}
.n-button{
    flex:3;
 
}

@media screen and (max-width: 1000px){
  .n-left{
    margin-left:40px;
  }
  .n-List{
    display: none;
  }
  .n-button{
    display:none;
  }
}

`

export default Navbar