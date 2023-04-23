import React from 'react'
import styled from 'styled-components'
import {IoLogoWhatsapp} from "react-icons/io"
const Whatsapp = () => {
  return (
    <Section>

   <button className='float'> <a href="https://wa.me/+917008719018"><IoLogoWhatsapp color="white" className='my-float'/></a> </button>

    </Section>
  )
}

export default Whatsapp

const Section=styled.section` 

 @media only screen and (min-device-width: 1081px) {
  display:none;
 }
	
@media only screen and (max-device-width: 1080px) {
    font-family:Verdana, Geneva, sans-serif;
	font-size:22px;
	background-color:#CCC;


.float{
   
	position:fixed;
    z-index:15;
	padding:0.3rem 0.6rem;
	bottom:40px;
	right:30px;
	background-color:#3CD72F;
	color:#FFF;
	border-radius:50px;
    display:flex;
	align-item:center;
	box-shadow: 2px 2px 3px #999;
    
    border:none;
}

.my-float{
	margin:3px;
}

    
}
`