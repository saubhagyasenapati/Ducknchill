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
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <BsFacebook/>
        </a></li>
      <li class="social-icon__item"> <a class="social-icon__link" href="https://www.tripadvisor.com/Hotel_Review-g816969-d4978980-Reviews-Duck_n_Chill-Agonda_South_Goa_District_Goa.html" target="_blank" rel="noopener noreferrer"><SiTripadvisor/></a></li>
      <li class="social-icon__item">   <a href="https://wa.me/7008719018" class="social-icon__link" target='_blank'  rel="noopener noreferrer"> <IoLogoWhatsapp/></a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#about">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#accomodation">Accomodation</a></li>
      <li class="menu__item"><a class="menu__link" href="#restaurant">Restaurant</a></li>
      <li class="menu__item"><a class="menu__link" href="#locaton">Location </a></li>
      <li class="menu__item"><a class="menu__link" href="#contact">Contact </a></li>

    </ul>
    <a href="tel:+917008719018">+91 7008719018</a>
    <p>&copy;2023 DuckNChill | All Rights Reserved</p>
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> 
      </FooterContainer>

  )
}

const FooterContainer=styled.footer`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");


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



@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}
@media screen and (max-width: 1080px){
  margin-top: 0rem;
  min-height:0;
}

`