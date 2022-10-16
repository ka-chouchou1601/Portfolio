import React from 'react'
import styled from 'styled-components'
import {themeContext} from '../Context'
import { useContext } from'react'
const FloatingDiv = ({img,txt1, txt2}) => {
  const theme =  useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <Container>
<div className="Floatingdiv"
 style={
    {
     
      color: darkMode? 'black': 'black'
    }
   }>
    <img src={img}/>
    <span>
        {/* passing them as props */}
       {txt1}
        <br/>
      {txt2}
    </span>
</div>
    </Container>
    
  )
}

const Container= styled.div`
.Floatingdiv{
  justify-content: space-around;
  display:flex;
  background: #F5EDDC;
  box-shadow:0px 19px 60px rgb(0 0 0 / 8%);
  border-radius: 17px;
  align-items:center;

  padding-left:35px;
  padding-right:40px;

  height:70px;
  gap:10px;
  

}
.Floatingdiv>img{
  transform:scale(1);

}
.Floatingdiv>span{
  font-family:sans-serif;
  font-size:16px;


}
`
export default FloatingDiv