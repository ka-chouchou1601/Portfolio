import React, { useState } from 'react'
import styled from 'styled-components'
import'../App.css'
import emailjs from '@emailjs/browser';
import { useRef } from'react';

const Contact = () => {
    const form = useRef();
    const [done,setDone]=useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_swzv3w8', 'template_wswyvun', form.current, 'j0Z3LqD6un_Mcv4TJ')
      .then((result) => {
          console.log(result.text);
          setDone=(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container>
<div className="contact-form" id="contact">
      {/* left side copy and paste from Service section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button C-button"/>
        <span>{done && 'thanx for contacting me!'}</span>
          {/* <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
    </div>
 
    </Container>
     );
};
  
const Container=styled.div`
.contact-form{
    padding: 0 3rem 0 3rem;
    display: flex;
    height: 80vh;
    margin-top: 15rem;
      /* scroll */
  padding-top: 3rem;
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
.c-right{
    display: flex;
    justify-content: center;
    position: relative;
    flex: 1;
}

.c-right>form
{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    
}

.c-right .user{
    width: 20rem;
    height: 2rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid var(--orange);
    border-radius: 8px;
    font-size: 16px;   
}

textarea{
    height: 4rem!important;
}

.c-blur1{
    top: 1rem;
    left: 8rem;
}
.C-button{
    width:8rem;
  height:2rem;
  margin-top:5px;
}
`
export default Contact