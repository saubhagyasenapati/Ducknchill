import React from 'react'
import styled from  "styled-components"
import homeimage from "../Asset/hero8.png"
export default function Hero() {
  return (
    <Section id="hero">
      <div className="heromain">
      <div className='background'>
       <img className='heroimage' src={homeimage} alt="" />
       </div>
       {/* <div className="maintext">
        <h1 className='textmain'>Welcome To Our Humble Abort</h1>
       </div> */}
      </div>
       
        <div className='content'>
            <div className='title'>
            <h1>About</h1>
            <p>Welcome to Duck n Chill, a charming resort to unwind and chill located on the long, peaceful and beautiful Agonda Beach, South Goa.</p>
            <p>From breakfast through to dinner, our beach-side bar & restaurant will offer you traditional Goan cuisine and international dishes using only the finest, local ingredients. Every day you can enjoy fresh fish and watch the sunset whilst sipping on a Mojito!
 </p>
    <p>There is a choice of beach huts to suit different budgets, but all have king or double bedrooms, internal en-suite bathrooms, fans and balconies where you can listen to the sound of the waves as you fall peacefully asleep. </p>
            </div>
          
        </div>
    </Section>
  )
}

const Section=styled.section`
 position:relative;
 margin-top:2rem;
 width:100%;
 height:100%;

 .background{
    height:100%;
    .heroimage{
        width:100%; 
        border-radius:2.5rem;
    }    
 }
//  .maintext{
//     height:100%;
//     width:100%;
//     position:absolute;
//     top:0;
//     color:white;
//     font-family: 'Smooch', cursive;
//     z-index:3;
//     text-align:center;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     .textmain{
//       font-size:7rem;
//     }
   
 }
 
}   
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
 }
`;
