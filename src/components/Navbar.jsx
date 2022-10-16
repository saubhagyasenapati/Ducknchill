import React from 'react'
import styled from "styled-components"
import logo from "../Asset/logo.jpg"
import {IoLogoWhatsapp} from "react-icons/io"
export default function Navbar() {
  return (
    <>
     <Nav>
         <div className="brand">
              <div className="container">
                <img src={logo} alt="" />
                Duck N Chill
              </div>
              <div className="toggle"></div>
         </div>
         <ul>
            <li><a href="#hero">Home</a> </li>
            <li><a href="#accomodation">Accomodation</a> </li>
            <li><a href="#facility">Facilities</a> </li>
            <li><a href="#location">Location</a> </li>
            <li><a href="#testimonials">Testimonials</a> </li>
         </ul>
         <button> <a href="https://wa.me/+917077866173">Contact Us On <IoLogoWhatsapp className='icon'/></a> </button>
     </Nav>
    </>
  );
}

const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
    .container{
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-item:center;
        gap:1rem;
        font-size:2.5rem;
        font-weight:600;
        font-family: 'Yellowtail', cursive;
    }
    .toggle{
        display:none;
    }
    
}
ul{
    display:flex;
    list-style-type:none;
    gap:1rem;
    li
    {
        a{
            text-decoration:none;
            color:#08C3C3;
            font-size:1.2rem;
            transition:0ms.1s ease-in-out ;
            &:hover{
                color:#0A8A8A;
            }
        }
        &:first-of-type{
           a{
            color:#01A5A5;
            font-weight:900;
           } 
        }
    }
   
}
button{
    padding:0.8rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    color:white;
    background-color:#80CB7A;
    text-transform:uppercase;
    fonst-size:1.2rem;
    letter-spacing:0.1rem
    transition:0.3s ease-in-out ;
    &:hover{
        background-color:#3CD72F;
    }
    a{
        text-decoration:none;
        color:white;
    }
    .icon
    {
        font-size:1.5rem;
    }
  }
  
`;