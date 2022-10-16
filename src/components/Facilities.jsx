import React from 'react'
import styled from 'styled-components'
import facility1 from '../Asset/Facility/facility1.png'
import facility2 from '../Asset/Facility/facility2.png'
import facility3 from '../Asset/Facility/facility3.png'
import facility4 from '../Asset/Facility/facility4.png'
import facility5 from '../Asset/Facility/facility5.png'
import facility6 from '../Asset/Facility/facility6.png'

export default function Facilities() {
   const data=[
    {
      icon:facility1,
      title:"Free Wi-Fi"
    },
    {
      icon:facility2,
      title:"Bar & Resturant"
    },
    {
      icon:facility3,
      title:"24hr Room Service"
    },
    {
      icon:facility4,
      title:"Laundry & Daily Housekeeping"
    },
    {
      icon:facility5,
      title:"Direct Beach access"
    },
    {
      icon:facility6,
      title:"Airport Shuttle"
    }
    
   ];
  return (
    
   <Section id="facility">
       <div >
        <h1 className="facilitytitle">Facility</h1>
       </div>
       <div className="facilitybody">
       { 
        data.map((facility)=>{
          return(
            <div className="facility">
              <div className='icon'>
                <img src={facility.icon} alt="" />
              </div>
              <h3 className="title">{facility.title}</h3>
            </div>
          )
        })
      }
       </div>
      
   </Section>
  )
}

const Section=styled.section`
      padding:3rem 0rem; 
      .facilitytitle {
        font-size:4rem;
        letter-spacing:0.2rem;
        font-family: 'Lobster', cursive;
        text-align:center;
      }    
    .facilitybody{
      padding:2rem 3rem;
      display:grid;
      grid-template-columns:repeat(6,1fr);
      gap:1rem;
      .facility 
      {
        display:flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem;
        background-color:#f2f2f2;
        box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
        transition:0.3s ease-in-out;
        &:hover{
          transform:translateX(0.4rem) translateY(-1rem);
          box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;
        }
        .title {
          font-size:1.6rem;
        }
        .icon{
          img{
            height:4rem;
          }
        }
      }
    }   
`;
