import React from 'react'
import styled from "styled-components"
import trip from "../Asset/Tripadvisor/Tripadvisor.png"
export default function Location() {
  return (
     <Section id="location">
      <div className='location'>
        <div className="loc">
         <h1>Location</h1>
         <div className="googlemap">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.92979382155!2d73.97981331483129!3d15.051998989516267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe4fa1e2aed205%3A0xe9890ebe296f85e2!2sDuck%20N%20Chill%20-%20Agonda!5e0!3m2!1sen!2sin!4v1665912546524!5m2!1sen!2sin" width="100%" height="500px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         </div>
      <div className='Tripadvisor'>
        <h1>Tripadivor</h1>
        <a href="https://www.tripadvisor.com/Hotel_Review-g816969-d4978980-Reviews-Duck_n_Chill-Agonda_South_Goa_District_Goa.html"target="_blank">
        <img className='tripimg' src={trip}alt="" />
        </a>
        </div>
    </div>
      
     
     </Section>
      
   
  )
}

const Section=styled.section`
  h1{
    font-family: 'Lobster', cursive;
    font-size:4rem;
    text-align:center;
  }
 .location{
  display:flex;
   padding:4rem;
   gap:10rem;
   justify-content:center;

 }
 .loc{
  width:80%;
  font-size:4rem;
  .googlemap{
   margin-top:3rem;
   box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
   transition:0.3s ease-in-out;
        &:hover{
          transform:translateX(0.5rem) translateY(-1rem);
          box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
        }
  }
 }
 .Tripadvisor
 {
  font-family: 'Lobster', cursive;
 
  .tripimg{
    margin-top:2rem;
    box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
    transition:0.3s ease-in-out;
        &:hover{
          transform:translateX(0.4rem) translateY(-1rem);
          box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
        }
  }
 }

`