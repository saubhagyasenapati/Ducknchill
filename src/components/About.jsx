import React from 'react'
import styled from 'styled-components'
const About = () => {
  return (
    <Section id='about'>
           <div className='content'>
            <div className='title'>
            <h1>About</h1>
            <p>Welcome to Duck n Chill, a charming resort to unwind and chill located on the long, peaceful and beautiful Agonda Beach, South Goa.</p>
           <p>From breakfast through to dinner, our beach-side bar & restaurant will offer you traditional Goan cuisine and international dishes using only the finest, local ingredients. Every day you can enjoy fresh fish and watch the sunset whilst sipping on a Mojito!
 </p> 
    <p>There is a choice of beach huts to suit different budgets, but all have king or double bedrooms, internal en-suite bathrooms, fans and balconies where you can listen to the sound of the waves as you fall peacefully asleep.</p>
            </div>
          <div className='timming'>
            <p>Check In:1:00PM</p>
            <p>Check Out:11:00AM</p>
          </div>
        </div>
    </Section>
  )
}

export default About
const Section=styled.section`
  padding:2.5rem ;
  .content
 {   
    margin-top:2rem;
    height:100%;
    width:100%; 
    text-align:center;
    .title{
        h1{
        font-size:4rem;
        letter-spacing:0.2rem;
        font-family: 'Lobster', cursive;
        }
        p{
            text-align:center;
             margin-top:1rem;
             font-size:1.5rem;
             font-family: 'Archivo', sans-serif;
        }
    }
    .timming{
      display:flex;
      align-items:center;
      justify-content: space-evenly;
      flex-direction:row;
      margin-top: 2rem;
      p{
        font-family: 'Archivo', sans-serif;
        font-weight:800;
        font-size:1.7rem;
      }
    }
 }
 @media only screen and (max-device-width: 980px){
    padding:0.5rem ; 
  .content
 {   
    margin-top:2rem;
    height:100%;
    width:100%; 
    text-align:center;
    .title{
        h1{
        font-size:3rem;
        }
        p{
             font-size:1rem;
          
        }
    }
    .timming{
      p{

        font-weight:800;
        font-size:1.2rem;
      }
    }
 }
 }
`