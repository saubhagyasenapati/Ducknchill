import React from 'react'
import styled from "styled-components";
import {IoLogoWhatsapp} from "react-icons/io";
import {SiTripadvisor} from "react-icons/si"
import {BsFacebook} from "react-icons/bs"
export default function Footer() {
  return (
     <FooterContainer id="footer" >
       <footer class="footer">
 <h1 className='title'>DuckNChill</h1>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://m.facebook.com/people/DucknChill-Agonda/100063791744205/" rel="noreferrer" target="_blank">
      <BsFacebook/>
        </a></li>
      <li class="social-icon__item"> <a class="social-icon__link" rel="noreferrer"  href="https://www.tripadvisor.com/Hotel_Review-g816969-d4978980-Reviews-Duck_n_Chill-Agonda_South_Goa_District_Goa.html" target="_blank"><SiTripadvisor/></a></li>
      <li class="social-icon__item">   <a href="https://wa.me/7008719018" rel="noreferrer"  target="_blank" class="social-icon__link" > <IoLogoWhatsapp/></a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#about">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#accomodation">Accomodation</a></li>
      <li class="menu__item"><a class="menu__link" href="#restaurant">Restaurant</a></li>
      <li class="menu__item"><a class="menu__link" href="#location">Location </a></li>
      <li class="menu__item"><a class="menu__link" href="#enquiry">Enquiry</a></li>

    </ul>
    <a >
       <a href="tel:+917008719018" className='details'>+91 7008719018</a> <a style={{color:'white'}}>/</a> <a href="tel:+917517678938" className='details'>+91 7517678938</a></a>
   
    <a href="mailto:ducknchillgoa@gmail.com" className='details'>ducknchillgoa@gmail.com</a>
    <p>&copy;{new Date().getFullYear()} DuckNChill | All Rights Reserved</p>
  </footer>

      </FooterContainer>

  )
}

const FooterContainer=styled.footer`
  margin-top: 1rem;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 50vh;

.title{
        font-size:3rem;
        font-family: 'Yellowtail', cursive;
        color:#fff
}
.footer {
  position: relative;
  width: 100%;
  background:#000;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a{
  color:#fff;
  text-decoration:none;
  font-size:1rem;
}
.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  padding-left: 0rem;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 0.9rem;
  font-weight: 300;
}

.details{
  margin-top: 8px;
  text-align: center;
  :hover{
    color: #a8a8a8ac;
    font-weight: 600;
  }
}



`