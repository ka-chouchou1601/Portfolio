import React from 'react'
import styled from 'styled-components';
import'../App.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import {themeContext} from '../Context'
import { useContext } from'react'

const Toogle = () => {
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type: 'toogle'})
    }
  return (
    <Container>
<div className="toogle"  onClick={handleClick}>
    <Moon  />
    <Sun  />
    <div className="t-button"  
   
    style={darkMode? {left:'2px'}: {right:'2px'}}>
       
    </div>
</div>
    </Container>
    
  )
}
 const Container= styled.div`
 .toogle{
display:flex;
justify-content:space-between;
border:3px solid #dc4848;
border-radius:1rem;
position:relative;
padding :2px;
cursor: pointer;
 }
 .toogle>*{
    width:1rem;
    height:1rem;
    color: #dc4848;
 }
 .t-button{
    border-radius:100%;
    background:#dc4848;
   position:absolute;
 }

 `
export default Toogle