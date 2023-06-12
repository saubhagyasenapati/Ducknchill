import React from 'react'
import styled from 'styled-components'
import {IoLogoWhatsapp} from "react-icons/io"
const Offer = () => {
  return (
    <Section >
        <div className='float'>
        <p >Currently we are Closed but you can book us for the next season by calling on the number:+917077866173</p>
        </div>
  

    </Section>
  )
}

export default Offer

const Section=styled.section` 



.float{
  
   width: 250px;
border-radius: 10px;
	position:fixed;
    z-index:15;
	padding:0.7rem ;
	bottom:5px;
	right:0px;
	background-color: rgba(145, 151, 155, 0.073);
	color:black;
    display:flex;
	align-items:center;
	box-shadow: 2px 2px 3px #999;
    
    border:none;
}

.my-float{
	margin:3px;
}

@media only screen and (max-device-width: 1080px) {
 p{
    font-size: 0.8rem;
    .float{
        width: 50px;
    }

 } 
}
`