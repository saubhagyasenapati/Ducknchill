import React from "react";
import styled from "styled-components";
import homeimage from "../Asset/hero.jpg";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    
    <Section id="hero">
      <div className="heromain">
        <div className="background">
          <img className="heroimage" src={homeimage} alt="" />
        </div>
        <div className="maintext">
          <h1 className="textmain">Welcome To Our Humble Abort</h1>
      
            <p className="content">A charming resort to unwind and chill located on the long,
            peaceful and beautiful Agonda Beach, South Goa.
            </p>
          <button className="book" onClick="location.href='#contact'">Book A Room</button>
         
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
.heroimage{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
  .background {
    height: 100%;
    .heroimage {
      width: 100%;
    }
  }
  .maintext {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    color: white;
    font-family: "Smooch", cursive;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .textmain {
      font-size: 4.5rem;
    }

  }

  .content {
    font-size:1.5rem;
    font-family: "Archivo", sans-serif;
    font-weight:600;
  }
  .book{
    width:13% ;
    border-radius:2rem;
    display:flex;
    justify-content: center;
    font-family: "Archivo", sans-serif;
    padding:0.5rem ;
    border-style:none;
    font-size:1.2rem;
    color:#000
  }
  @media only screen and (max-device-width: 1080px) {
    width: 100%;
  height: 100%;
 .maintext{
  .textmain {
      font-size: 2.3rem;
    }
 }
 .content {
    font-size:1.1rem;
    width:80%;
  }
  .book{
    margin-top:2rem;
    width:30% ;
    border-radius:1rem;
  
  }
  }

`;
