
import React,{useState}from 'react'
import styled from "styled-components"
import Room1 from "../Asset/Beach front hut/pic1.jpg"
import Room2 from "../Asset/Seaview hut/Room2.jpg"
import Room3 from "../Asset/Standard hut/Room3.jpg"
import Room4 from "../Asset/Superior Ac cottage/Room4.jpg"
import Room5 from "../Asset/Budgett hut/Room5.jpg"
export default function Accomodation() {

  const data=[
    {
      image:Room1,
      title:"Beach Front Huts",
      subTitle:"We have 2 beautiful beach front huts which sit directly on the beach overlooking the Arabian Sea. ",
    },
    {
      image:Room2,
      title:"Sea View Huts",
      subTitle:"Our 2 sea view huts are elevated just behind the beach front huts to give you more privacy with stunning views of the sea.",
    },
    {
      image:Room3,
      title:"Standard Huts",
      subTitle:"Our standard huts are made of wood with Indian rice grass water-tight thatched roofs.",
    },
    {
      image:Room4,
      title:"Superior AC Cottages",
      subTitle:"Our two superior AC cottages are concrete built with a tiled roof quietly situated to the rear yet still a minute walk to the beach.",
    },
    {
      image:Room5,
      title:"Budget Huts",
      subTitle:"Our 2 budget huts are built the same way as the standard huts, just a little further away from the beach.",
    }
  ];
  const roomtype=[
    "All",
    "Beach Front Huts",
    "Sea View Huts",
    "Standard Huts",
    "Superior AC Cottages",
    "Budget Huts"
   ]; 
  const [active,setActive]=useState(1);
  return (
    <Section id="accomodation">
       <div >
        <h1 className='title'>Accomodation</h1>
       </div>
       <div className='RoomTypes'>
         <ul>
           {
            roomtype.map((pkg,index)=>
            { const pk="/"+index;
            console.log(pk);
              return(
                
                  <li className={active===index+1?"active":""} onClick={()=>setActive(index+1)}>
                    {pkg}</li>
              );
            })
           }
         </ul>
       </div>
       <div className="RoomImages">
        {

          data.map((roomimages)=>{
            return(
               <div className='roomimages'>
                <img src={roomimages.image} alt="" />
                <h3>{roomimages.title}</h3>
                 <p>{roomimages.subTitle}</p>
               </div>
               )
          })
        }
       </div>
      </Section>
  )
}

const Section=styled.section`
   padding:1rem 0;
   .title{
    text-align:center;
    font-size:4rem;
    font-family: 'Lobster', cursive;
   }
   .RoomTypes
   {
     display:flex;
     justify-content:center;
     margin:2rem 0;
   }
   ul{
     display:flex;
     list-style-type:none;
     width:max-content;
     li
     {
      padding:1rem 2rem;
      border-bottom:0.1rem solid black;
     }
     .active{
      border-bottom:0.4rem solid #333333;
   }  
   }
   .RoomImages{
        display:grid;
        gap:3rem;
        grid-template-columns:repeat(3,1fr); 
        padding:0 3rem;
    .roomimages{
        padding:1rem;
        display:flex;
        flex-direction:column;
        gap:0.5rem;
        img{
          width:100%;
          border-radius:2rem;
          height:400px;
        }
    }
    
   }
   
`