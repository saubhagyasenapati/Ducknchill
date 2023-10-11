import React, { useState } from 'react'
import styled from 'styled-components'
import {IoLogoWhatsapp} from "react-icons/io"

const Offer = () => {
    const [open, setopen] = useState(true)
  return (
   
    <Section  style={{display:open?"flex":"none"}}>
        <div className='float'> 
        <p>We're Temporarily Closed for Renovation. Secure Your Spot for the Next Season with Exclusive Early Bird Offers. Contact us at : <a href="tel:+917008719018 ">+91 7008719018</a></p>
       
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
            onClick={()=>setopen(false)}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </div>
    </Section>
  )
}

export default Offer

const Section=styled.section` 



.float{
 
   width: 100%;
   border-radius:30px 30px 0px 0px;
	position:fixed;
    z-index:15;
	padding:0.7rem ;
	bottom:0px;

	background-color: rgba(233, 239, 243, 0.3);
	color:black;
    display:flex;
	box-shadow: 2px 2px 3px #999;
    border:none;
    justify-content: space-evenly;
    p{
        font-size: 1.2rem;
        font-family: "Archivo", sans-serif;
        font-weight: 700;
        margin-top:10px ;
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
    color: #272525ac;
    font-weight: 600;
  }
    }
    button{
        background-color: rgba(233, 239, 243, 0.25);
        border: none;
    }
    svg {
      bottom: 20px;
      right: 30px;
      width: 2.5rem;
      height: 2.5rem;
      padding: 5px;
      
      cursor: pointer;
      fill: black;
      position: fixed;
      :hover{
        scale: 1.2;
    }
    }
  
}

.my-float{
	margin:3px;
}

@media only screen and (max-device-width: 1080px) {

    .float{
        background-color: rgba(233, 239, 243, 0.5);
        p{
font-size: 1rem;
        }
        svg {
            bottom:0px;
            right:5px ;
        }
    }

 
}
`