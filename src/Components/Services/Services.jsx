import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import glassesimoji from'../../img/glassesimoji.png'
import Resume from './Resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from'react'
import { motion } from'framer-motion'
import'../../App.css'
const Services = () => {
   const transition={duration:2 , type : 'spring'}
    const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <div className="Services" id="Services">
        {/* this is the left side */}
        <div className="awesome">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            My Remarkable
          </span>
          <span>abilities</span>
          <span>
            I bring a versatile skill set spanning front-end development (React
            Js, JavaScript, CSS, HTML), <br />
            back-end technologies (NodeJs, Express, MongoDB), and data analytics
            (Python, SQL, Tableau, PowerBI, Excel). <br />
            I also excel in organization, communication, and problem-solving,
            making me an adaptable <br />
            problem-solver, ready to contribute to any IT project.
          </span>

          <a href={Resume} download>
            <button className="button s-button">Download cv</button>
          </a>

          <div
            className="blur s-blur"
            style={{
              background: "#ABF1FF94",
            }}
          ></div>
        </div>
        {/* this is the right side */}

        <div className="Cards">
          <motion.div
            initial={{ left: "29rem" }}
            whileInView={{ left: "54rem" }}
            transition={transition}
            className="Cards_1"
          >
            <Card
              emoji={glassesimoji}
              heading={"Front & Back-end developer"}
              details={
                "React, javascript,css,chackra Ui, Styled Components,Node.js,express, MongoDB,"
              }
            />
          </motion.div>

          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            className="Cards_2"
          >
            <Card
              emoji={glassesimoji}
              heading={"Data Analyst"}
              details={" Python, SQL, Tableau, PowerBI, Excel "}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
const Container= styled.div`
.Services{
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
  margin-top:7px;
}
. Cards{
  display:flex;
  flex-direction: column;
  position : absolute;
  gap:20rem;
}
.Cards_1{
  position:absolute;
  left: 69%;

  
}
.Cards_2{
  position:relative;
   
  left:-4rem;
  top:15rem;
}
@media screen and (max-width:490px){
.Services{
  margin-top: 18rem;
  flex-direction: column;
  gap:5rem;
  
  .Cards{
    
    display:flex;
    flex-direction:column;
gap:16rem;
  }
  .Cards>*{
    position:static;
  }
}

}
@media screen and (max-width:1000px){
.Services{
  margin-top: 18rem;
  flex-direction: column;
  gap:5rem;
  
  .Cards{
    
    display:flex;
    flex-direction:column;
     gap:16rem;
  }
  .Cards>*{
    position:static;
  }
}

`
export default Services