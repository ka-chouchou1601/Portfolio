import React from 'react'
import styled from 'styled-components'

import Insta from'@iconscout/react-unicons/icons/uil-instagram'
import Github from'@iconscout/react-unicons/icons/uil-github'
import Linkedin from'@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <Container>
<div className="footer">
<div className="f-content">
<span>kanyonga.chouell@gmail.com</span>
<div className="f-icons">
<Insta color='#f8e7d4' size="3rem"/>
<Github color='#f8e7d4' size="3rem"/>
<Linkedin color='#f8e7d4' size="3rem"/>
</div>
</div>

</div>

    </Container>
    
  )
}
const Container = styled.div`
.footer{
    overflow:hidden;
    display:flex;
  align-items: center;
  position: relative;
   padding: 7% 17%;
  margin-left:-6%;
  margin-top: -5rem;
background:#dc4848;
width:100%;
height:100%;
 

}
.f-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  left:-100px;
  gap: 3rem;
  color: white;
}
.f-icons {
  display: flex;
  gap: 2rem;
}
`
export default Footer