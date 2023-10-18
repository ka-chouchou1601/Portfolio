import React from 'react'
import styled from 'styled-components'
import'../App.css'
import react from'../img/react.png'
import node from'../img/node.svg'
import mongodb from '../img/mongodb.png'
import SQL from "../img/SQL.png";
import python from "../img/python.png";
import tableau from "../img/tableau.png";
import PBi from "../img/PBi.png";
import javascript from '../img/javascript.png'
import express from'../img/express.svg'
import {themeContext} from '../Context'
import { useContext } from'react'
import { motion } from'framer-motion'

const Tools = () => {

    const transition={duration:2 , type : 'spring'}
    const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <div className="Tools" id="Tools">
        {/* left side */}
        <div className="awesome">
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Languages &
          </span>
          <span>Libraries</span>
          <span>
            I bring a versatile skill set spanning front-end development (React
            Js, JavaScript, CSS, HTML), <br />
            back-end technologies (NodeJs, Express, MongoDB), and data analytics
            (Python, SQL, <br />
            Tableau, PowerBI,Excel) I also excel in organization, communication,{" "}
            <br /> and problem-solving, making me an adaptable problem-solver,
            ready <br /> to contribute to any IT project.
          </span>

          {/* <a >
  <button className="button s-button">Hire me</button>
 </a> */}

          <div
            className="blur s-blur"
            style={{
              background: "#ABF1FF94",
            }}
          ></div>
        </div>

        {/* right side */}
        <div className="T-right">
          <motion.div
            initial={{ rotate: 50 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="T-mainCircle"
          >
            <div className="T-seCircle">
              <img src={react} alt="" />
            </div>
            <div className="T-seCircle">
              <img src={javascript} alt="" />
            </div>
            <div className="T-seCircle">
              <img src={express} alt="" />
            </div>
            <div className="T-seCircle">
              <img src={node} alt="" />
            </div>
            <div className="T-seCircle mongo">
              <img src={mongodb} alt="" />
            </div>
            <div className="T-seCircle ">
              <img src={SQL} alt="" />
            </div>
            <div className="T-seCircle ">
              <img src={python} alt="" />
            </div>
            <div className="T-seCircle ">
              <img src={tableau} alt="" />
            </div>
            <div className="T-seCircle  ">
              <img src={PBi} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .Tools {
    padding: 0 0rem 0rem;
    display: flex;
    height: 90vh;
    margin-bottom: 8rem;
    margin-top: 7rem;
  }
  .awesome {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
  }

  .awesome > :nth-child(1) {
    color: black;
    font-size: 3rem;
    font-weight: bold;
  }
  .awesome > :nth-child(6) {
    color: black;
    font-size: 3rem;
    font-weight: bold;
  }

  .awesome > :nth-child(2) {
    color: #dc4848;
    font-size: 3rem;
    font-weight: bold;
  }
  .awesome > :nth-child(3) {
    font-weight: 200;
    color: gray;
    font-size: 16px;
    margin-top: 10px;
  }
  .s-button {
    width: 8rem;
    height: 2rem;
    margin-top: 5px;
  }
  .T-right {
    position: relative;
  }
  .T-mainCircle {
    left: 5rem;
    position: relative;
    width: 18rem;
    height: 18rem;
    border: 4px solid #dc4848;
    border-radius: 100%;
    box-shadow: -79px 51px 60px rgba(0, 0, 0, 0.08);
    top: 2rem;
    background: rgba(255, 255, 255, 0.12);
  }
  .T-mainCircle > * {
    position: absolute;
  }
  .T-mainCircle > :nth-child(1) {
    top: -2rem;
    left: 6.5rem;
  }
  .T-mainCircle > :nth-child(6) {
    top: 20px;
    left: 13rem;
  }
  .T-mainCircle > :nth-child(2) {
    top: 145px;
    left: -47px;
  }
  .T-mainCircle > :nth-child(7) {
    top: 250px;
    left: 13.5rem;
  }
  .T-mainCircle > :nth-child(3) {
    top: 145px;
    left: 135px;
    background: #dc4848;
    border: none;
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.6));
  }
  .T-mainCircle > :nth-child(4) {
    top: 7rem;
    left: 15.5rem;
  }
  .T-mainCircle > :nth-child(8) {
    top: 13rem;
    left: 1rem;
  }

  .T-mainCircle > :nth-child(5) {
    top: 15rem;
    left: 7rem;
  }

  .T-seCircle {
    width: 4rem;
    height: 4rem;
    position: absolute;
    border-radius: 100%;
    border: 5px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    background: #f8e7d4;
  }

  @media screen and (max-width: 1000px) {
    .Tools {
      flex-direction: column;
      height: 40rem;
      margin-top: 35rem;
      padding: 0;
      gap: 5rem;
    }
    .T-right {
      display: flex;
      align-items: flex-start;
      justify-content: start;
      transform: scale(0.8);
    }
    .T-mainCircle {
      position: static;
    }
  }
`;
export default Tools