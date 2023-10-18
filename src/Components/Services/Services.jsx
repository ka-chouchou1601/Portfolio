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
            My Outstanding
          </span>
          <span>Experience</span>
          <span>
            I have gained extensive experience working with two companies, Alero
            and Aclis, one based in Kenya <br />
            and the other in Burundi, where I served as a developer. In this
            role, I specialized in analyzing client <br />
            requirements and proficiently developed and tested both front-end
            and back-end applications,
            <br /> utilizing modern technologies. Additionally, I've had the{" "}
            opportunity to collaborate remotely <br />
            with iProsper, a Canadian-based company. In this capacity, I
            provided support in system <br />
            management, website updates,instance creation, custom data forms{" "}
            <br /> development, and social media post management."
           
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
            initial={{ left: "19rem" }}
            whileInView={{ left: "43rem" }}
            transition={transition}
            className="Cards_1"
          >
            <Card
              emoji={glassesimoji}
              heading={"Aclis & Alero developer"}
              details={
                "Analyzing client needs, developing  and testing both front-end and back-end applications using modern technologies."
              }
            />
          </motion.div>

          <motion.div
            initial={{ left: "-10rem", top: "14rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            className="Cards_2"
          >
            <Card
              emoji={glassesimoji}
              heading={"Back-up admin in prosper"}
              details={
                " Assisting with iProsper system management and website updates, assisting with instance creation, custom data forms creation with  iProsper, and managing social media posts. "
              }
            />
          </motion.div>
          {/* <motion.div
            initial={{ left: "-13rem", top: "20rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            className="Cards_3"
          >
            <Card
              emoji={glassesimoji}
              heading={"Interpreter"}
              details={
                "As an interpreter, I have been involved in assisting clients in hospitals, schools, welfare agencies, among others"
              }
            />
          </motion.div> */}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.Services{
  padding : 0 0rem 0rem;
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

.Cards_1{
  position:absolute;
  
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

`;
export default Services;