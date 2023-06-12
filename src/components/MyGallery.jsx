import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../Asset/Gallery/photo1.webp";
import image2 from "../Asset/Gallery/photo2.webp";
import image3 from "../Asset/Gallery/photo3.webp";
import image4 from "../Asset/Gallery/photo4.webp";
import image5 from "../Asset/Gallery/photo5.webp";
import image6 from "../Asset/Gallery/photo6.webp";
import image7 from "../Asset/Gallery/photo7.webp";
import image8 from "../Asset/Gallery/photo8.webp";
import image9 from "../Asset/Gallery/photo9.webp";
import image10 from "../Asset/Gallery/photo10.webp";
import image11 from "../Asset/Gallery/photo11.webp";
import image12 from "../Asset/Gallery/photo12.webp";
import image13 from "../Asset/Gallery/photo13.webp";
import image14 from "../Asset/Gallery/photo14.webp";
import image15 from "../Asset/Gallery/photo15.webp";
import image16 from "../Asset/Gallery/photo16.webp";
import image17 from "../Asset/Gallery/photo17.webp";
import image19 from "../Asset/Gallery/photo19.webp";

const MyGallery = () => {
  let data = [
    {
      id: 1,
      imgsrc: image1,
    
      
    },
    {
      id: 2,
      imgsrc: image2,
    },
    {
      id: 3,
      imgsrc: image3,
    },
    {
      id: 4,
      imgsrc: image4,
    },
    {
      id: 5,
      imgsrc: image5,
    },
    {
      id: 6,
      imgsrc: image6,
    },
    {
      id: 7,
      imgsrc: image7,
    },
    {
      id: 8,
      imgsrc: image8,
    },
    {
      id: 9,
      imgsrc: image9,
    },
    {
      id: 10,
      imgsrc: image10,
    },
    {
      id: 11,
      imgsrc: image11,
    },
    {
        id: 12,
        imgsrc: image12,
      },
    {
      id: 13,
      imgsrc: image13,
    },
    {
      id: 14,
      imgsrc: image14,
    },
    {
      id: 15,
      imgsrc: image15,
    },
    {
      id: 16,
      imgsrc: image16,
    },
    {
      id: 17,
      imgsrc: image17,
    },
    {
        id: 19,
        imgsrc: image19,
      },
  
 
  ];
  const [modal, setModal] = useState(false);
  const [Tempimgsrc, setTempimgsrc] = useState("");
  const getImg = (img) => {
    setTempimgsrc(img);
    setModal(true);
  };
  return (
    <>
      <Section id="gallery">
        <div className={modal ? "modal open" : "modal"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setModal(false)}
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
          <img src={Tempimgsrc} alt="South Goa Life,Agonda,DuckNChill" loading="lazy" />
          <button onClick={() => setModal(false)}>Close</button>
        </div>
        <div>
          <h1 className="title">Gallery</h1>
        </div>
        <div className="gallerygrid">
         <div className="column" >
         <img
                  src={data[0].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[0].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[1].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[1].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[8].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[8].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[3].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[3].imgsrc)}
                  loading="lazy"
                />
         </div>
         <div className="column" >
         <img
                  src={data[4].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[4].imgsrc)}
                  loading="lazy"
                />
            
                <img
                  src={data[6].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[6].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[7].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[7].imgsrc)}
                  loading="lazy"
                />
                 <img
                  src={data[17].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[17].imgsrc)}
                  loading="lazy"
                />
         </div>
         <div className="column" >
         <img
                  src={data[9].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[9].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[2].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[2].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[10].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[10].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[12].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[12].imgsrc)}
                  loading="lazy"
                />
         </div>
         <div className="column" >
         <img
                  src={data[11].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[11].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[13].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[13].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[14].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[14].imgsrc)}
                  loading="lazy"
                />
                <img
                  src={data[16].imgsrc}
                  alt="South Goa Life,Agonda,DuckNChill"
                  onClick={() => getImg(data[16].imgsrc)}
                  loading="lazy"
                />

         </div>
        

           
              
            
         
     
        </div>
      </Section>
    </>
  );
};

export default MyGallery;

const Section = styled.section`
padding: 50px;

  .title {
    text-align: center;
    font-size: 4rem;
    font-family: "Lobster", cursive;
    margin-bottom: 50px;
  }

  .gallerygrid {
display:flex;
flex-wrap: wrap;
padding: 0 4px;
.column{
    flex:1 1 25%;
    padding: 0 4px;
    img{
     
        margin-top: 8px;
        width: 100%;
        cursor: pointer;
        :hover {
        filter: opacity(0.8);
      }
    }
}
  }

  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale();
    overflow: hidden;
    z-index: 999;
    img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 40px 0 80px;
      margin: 0 auto;
    }
  }
  .open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    svg {
      top: 20px;
      right: 20px;
      width: 2rem;
      height: 2rem;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      fill: white;
      position: fixed;
    }
    button {
      bottom: 20px;
      align-items: center;

      border-radius: 20px;
      padding: 10px;
      font-size: 1.2rem;
      font-family: "Lobster", cursive;
      cursor: pointer;
      fill: white;
      position: fixed;
    }
  }
  @media (max-width: 991px) {
    padding: 25px;
    .gallerygrid {
        height: 600px; /* or any value */
    overflow-y: auto;
    }
   
  }
  @media (max-width: 540px) {
    padding: 8px;
    margin: 0 5px;
    .gallerygrid {
    padding: 0 2px;
    height: 500px; /* or any value */
    overflow-y: auto;
    .column{
        flex:50%;
        padding: 0 2px;
        img{
            margin-top: 2px;
            vertical-align: middle;

        }
    }
    }
    
  }
`;
