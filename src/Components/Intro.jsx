import React from 'react'
import styled from 'styled-components'
import'../App.css'
import FloatingDiv from './FloatingDiv'
import Crown from'../img/Crown.png'

import chouellaF from'../img/chouellaF.png'
import thumbup from'../img/thumbup.png'
import Github1 from'../img/Github1.svg'
import Insta from'../img/Insta.svg'
import LinkedIn1 from'../img/LinkedIn1.svg'
import {themeContext} from '../Context'
import { useContext } from'react'
import { motion } from'framer-motion'
import { Link } from 'react-scroll'
const Intro = () => {
  // for the motion
  const transition={duration:2 , type : 'spring'}

// for the dark mode
    const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Hey ! I Am{" "}
            </span>
            <span>Chouella Kanyonga </span>
            <span>
              Student in Master's Management at IAE, with a concentration in
              Information Systems and Digital Innovation, passionate about
              technology and data management, seeking opportunities in Data
              Analytics, IT project management, and Business Analysis to help
              companies achieve their goals
            </span>
          </div>
          <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
            <button className="button i-button">Hire me</button>
          </Link>

          <div className="i-icons">
            <a href="https://github.com/ka-chouchou1601">
              <img src={Github1} />
            </a>
            <a href="https://www.instagram.com/kchouella/">
              <img src={Insta} />
            </a>
            <a href="https://www.linkedin.com/in/kanyonga-chouella-6790911a8/">
              <img src={LinkedIn1} />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img className="i-picture" src={chouellaF} />
          <motion.div
            initial={{ top: "4%", left: "9rem" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{ top: "10%", left: "62%" }}
            className="floating-div"
          >
            <FloatingDiv
              img={thumbup}
              txt1={" Let's work"}
              txt2={"together"}
            />
          </motion.div>
          <motion.div
            initial={{ top: "18rem", left: "9rem" }}
            whileInView={{ left: "0rem", top: "8rem" }}
            transition={transition}
            style={{ top: "9rem", left: "4rem" }}
            className="floating-div"
          >
            <FloatingDiv
              img={Crown}
              txt1={"I'm the right fit"}
              txt2={"for your team"}
            />
          </motion.div>
          {/* <div className="emoji">
  <img src={emoji2}/>

</div> */}
          <div className="blur" style={{ background: "rgb (238 210 255)" }}>
            {/* <div className="blur" style={{
  background:'#FEE0C0',
  top: '20rem',
  left:'-29rem',
  width:'40rem',
  height:'10rem',
  
}}>

</div> */}
          </div>
        </div>
      </div>
    </Container>
  );
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
  width:20rem;
  right:100px;
  top:-29px;


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
@media screen and (max-width:1000px){
 
  .intro{
    flex-direction:column;
    margin-left:40px;

   
  }
  .i-right{
    top:3rem;
    transform:scale(0.8);
left:5px;
  }
  .i-name>:nth-child(3){
    width:250px;
  }
  .floating-div:nth-of-type(1){
top:-7rem ;
margin-left:-85px;
  }
    .floating-div:nth-of-type(2){
      margin-left:-120px;
    }
}
`

export default Intro