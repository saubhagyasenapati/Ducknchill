import React from 'react'
import styled from "styled-components";
import {IoLogoWhatsapp} from "react-icons/io";
import {SiTripadvisor} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
export default function Footer() {
  return (
     <FooterContainer id="contact" >
      
      <div className="center">
      <ul className="links">
            <li><a href="#hero">Home</a> </li>
            <li><a href="#accomodation">Accomodation</a> </li>
            <li><a href="#gallery">Gallery</a> </li>
            <li><a href="#location">Location</a> </li>
        </ul>
      </div>
      <div className="center">
      <ul className="Social_links">
        <li>
        <a href="https://www.facebook.com/people/DucknChill-Agonda/100063791744205/" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        </li>
        <li>
          <a href="https://www.tripadvisor.com/Hotel_Review-g816969-d4978980-Reviews-Duck_n_Chill-Agonda_South_Goa_District_Goa.html" target="_blank" rel="noopener noreferrer"><SiTripadvisor/></a>
          
        </li>
        <li>
          <a href="https://wa.me/7077866173" target='_blank'  rel="noopener noreferrer"> <IoLogoWhatsapp/></a>
         
        </li>
      </ul>
      </div>
      
      <div className="center">
        <h3>Contact Us</h3>
      </div>
      <div className="center">
      <a href="mailto:DucknChill-Agonda@Beaches-Of-Goa.com">DucknChill-Agonda@Beaches-Of-Goa.com</a>
      </div>
      <div className="center">
        <a href="tel:+917008719018">+91 7008719018</a>
      </div>
      <div className="center">
        <p>Copyright &copy;2022 DuckNChill.All rights Reserved</p>
      </div>
      
      </FooterContainer>

  )
}

const FooterContainer=styled.footer`
 display:block;
 background-color:#d1d1e0;
 padding:1rem;
 border-radius:0.5rem;
 .center {
  margin:0.5rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
 }
 ul{
  display:flex;
  list-style-type:none;
  gap:2rem;
  li{
    a{
      text-decoration:none;
      color:black;
      transition:0ms.3s ease-in-out;
      &:hover{
        color:#302ce9;
      }
    }
    svg{
      font-size:3rem;
      transition:0ms.3s ease-in-out;
      &:hover{
        color:white;
      }
    }
  }
 }
`