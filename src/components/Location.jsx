import React from 'react'
import styled from "styled-components"
export default function Location() {
  return (
     <Section id="location">
        <div className='title'>
        <h1>Location</h1>
        </div>
      <div className='location'>
      
        <div className="loc">
      
         <div className="googlemap">
         <iframe title='ducknchillmap'className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.92979382155!2d73.97981331483129!3d15.051998989516267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe4fa1e2aed205%3A0xe9890ebe296f85e2!2sDuck%20N%20Chill%20-%20Agonda!5e0!3m2!1sen!2sin!4v1665912546524!5m2!1sen!2sin" width="100%" height="200px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         </div>
         
      </div>
      
     
     </Section>
      
   
  )
}

const Section=styled.section`
 display:flex;
  flex-direction:column;
  margin-top:3rem;
  h1{
    font-family: 'Lobster', cursive;
    font-size:4rem;
    text-align:center;
  }
 .location{
  display:flex;
  flex-direction:row;
   padding:2rem;
   gap:2rem;
   justify-content:center;
 }
 .loc{
  width:100%;
  font-size:4rem;
  .googlemap{
   margin-top:1rem;
   box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
  
  }
 }
 .locdist{
  margin-top:1rem ;
  width:30% ;
  font-size:1.2rem;
    font-family: "Archivo", sans-serif;
 }
 @media  screen and (max-device-width: 1080px) {
  padding:1rem;
  h1{
   
    font-size:3rem;
 
  }
  .location{
  display:flex;
  flex-direction:column;
   padding:0.5rem;
 }
 .loc{
  width:100%;
  font-size:3rem;

}
  margin-top:1rem;
  .locdist{
    font-size:0.9rem;
  width:100% ;
 
 }


 }
`
