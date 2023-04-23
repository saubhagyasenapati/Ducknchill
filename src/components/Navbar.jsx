import React,{useState} from 'react'
import styled from "styled-components"
import logo from "../Asset/logo.jpg"
import {IoLogoWhatsapp} from "react-icons/io"
import{GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"

export default function Navbar() {
    const[navbarState,setNavbarState]=useState(false);
  return (
    <>
     <Nav >
         <div className="brand">
              <div className="container">
              
                DuckNChill
              </div>
              <div className="toggle">
                {
                navbarState?<VscChromeClose color="white" onClick={()=>setNavbarState(false)}/>:
                <GiHamburgerMenu color="white" onClick={()=>setNavbarState(true)}/>
                }
              </div>
         </div>
         <ul>
            <li><a href="/" >Home</a> </li>
            <li><a href="#about">About</a> </li>
            <li><a href="#accomodation">Accomodation</a> </li>
            <li><a href="#restaurant">Restaurant</a> </li>
            <li><a href="#location">Location</a> </li>
            <li><a href="#gallery">Gallery</a> </li>  
            <li><a href="#contact">Contact</a> </li>
         </ul>
         <button> <a href="https://wa.me/+917008719018"><IoLogoWhatsapp className='icon'/></a> </button>
     </Nav>
     <ResponsiveNav state={navbarState}>
     <ul>
            <li><a href="/" onClick={()=>setNavbarState(false)}>Home</a> </li>
            <li><a href="#about" onClick={()=>setNavbarState(false)}>About</a> </li>
            <li><a href="#accomodation"onClick={()=>setNavbarState(false)}>Accomodation</a> </li>
            <li><a href="#restaurant"onClick={()=>setNavbarState(false)}>Restaurant</a> </li>
            <li><a href="#location"onClick={()=>setNavbarState(false)}>Location</a> </li> 
            <li><a href="#gallery" onClick={()=>setNavbarState(false)}>Gallery</a> </li>  
            <li><a href="#contact"onClick={()=>setNavbarState(false)}>Contact</a> </li>
         </ul>

     </ResponsiveNav>
     
    </>
  );
}

const Nav=styled.nav`
position:absolute;
z-index:10;
top:0;
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
padding:5px ;

.brand{
    .container{
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-item:center;
        gap:1rem;
        font-size:2.5rem;
        font-family: 'Yellowtail', cursive;
        color:#fff
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
            color:#fff;
            font-size:1.3rem;
            transition:0ms.1s ease-in-out ;
            font-weight:700;
            &:hover{
                color:#A8A8A8;
            }
        }
        &:first-of-type{
           a{
            color:#fff;
            font-weight:900;
           } 
        }
    }
   
}
button{
    padding:0.6rem 0.8rem;
    margin-right:2rem; 
    cursor:pointer;
    border-radius:1rem;
    border:none;
    color:white;
    background-color:#80CB7A;
    text-transform:uppercase;
    font-size:1rem;
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
  @media only screen and (max-device-width: 1080px) 
  {
     .brand{
        display:flex;
        justify-content:space-evenly ;
        align-items:center;
        width:100%;
        .toggle{
            display:block ;
        }
     }
   ul,button{
    display:none;
   }
  }
`;
const ResponsiveNav=styled.div`
display:flex;
position:absolute;
z-index:5;
width:100% ;

background: rgba(0,0,0, 0.4);
transition:0.3s ease-in-out; 
top:${({state})=>(state?"61px":"-400px")} ;
 padding:0.1rem;
 text-align: center;
ul{
    list-style-type:none ;
    width:100%;
    display:flex;
  justify-content: center;
  flex-direction:column;
  padding-left:0rem ;
  margin-bottom:0.5rem;
    li{
        display: list-item;
        width:100%;
        a{
            text-decoration:none ;
            color:#fff;
            font-size:1.2rem;
            font-weight:700;
            transition:0ms.1s ease-in-out ;
            font-family: "Archivo", sans-serif;
            &:hover{
                color:#A8A8A8;
            }
        }
      
    }
}

 

`;