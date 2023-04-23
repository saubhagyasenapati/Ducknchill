import React, { useState } from "react";
import styled from "styled-components";
import Room11 from "../Asset/Beach front hut/pic1.jpg";
import Room12 from "../Asset/Beach front hut/pic2.jpg";
import Room13 from "../Asset/Beach front hut/pic3.jpg";
import Room14 from "../Asset/Beach front hut/pic4.jpg";
import Room21 from "../Asset/Seaview hut/Room2.jpg";
import Room22 from "../Asset/Seaview hut/pic2.jpg";
import Room23 from "../Asset/Seaview hut/pic3.jpg";
import Room24 from "../Asset/Seaview hut/pic4.jpg";
import Room25 from "../Asset/Seaview hut/pic5.jpg";
import Room31 from "../Asset/Standard hut/Room3.jpg";
import Room32 from "../Asset/Standard hut/pic1.jpg";
import Room33 from "../Asset/Standard hut/pic2.jpg";
import Room34 from "../Asset/Standard hut/pic6.jpg";
import Room35 from "../Asset/Standard hut/pic4.jpg";
import Room36 from "../Asset/Standard hut/pic5.jpg";
import Room41 from "../Asset/Superior Ac cottage/Room4.jpg";
import Room42 from "../Asset/Superior Ac cottage/pic1.jpg";
import Room43 from "../Asset/Superior Ac cottage/pic2.jpg";
import Room44 from "../Asset/Superior Ac cottage/pic3.jpg";
import Room45 from "../Asset/Superior Ac cottage/pic4.jpg";
import Room46 from "../Asset/Superior Ac cottage/pic5.jpg";
import Room51 from "../Asset/Budgett hut/Room5.jpg";
import Room52 from "../Asset/Budgett hut/pic1.jpg";
import Room53 from "../Asset/Budgett hut/pic2.jpg";
import Room54 from "../Asset/Budgett hut/pic3.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
function MyVerticallyCenteredModal(props) {
  const [type1, setType1] = useState('text');
  const [type2, setType2] = useState('text');
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Room's</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Sec>
          <div className="box">
            <p className="titlemain">{props.room.title}</p>
          </div>
          <div className="Modalbox">
            <div className="Modalboxleft">
              <Carousel>
                {props.room.image &&
                  props.room.image.map((img) => {
                    return (
                      <Carousel.Item interval={2000}>
                        <img
                          className="d-block mx-auto"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
              <div>
                <p className="desc">Description</p>
                <p className="sub">{props.room.subTitle}</p>
              </div>
            </div>
            <div className="Modalboxright">
              <p className="title">Send Us Details for Booking</p>
              <div class="contact-box">
                <form
                  action="https://formsubmit.co/sikan2601@gmail.com"
                  method="post"
                >
                  <input
                    type="hidden"
                    class="field"
                    placeholder="Room Type"
                    name="Room"
                    value={props.room.title}
                    required
                  />
                  <input
                    type="text"
                    class="field"
                    placeholder="Your Name"
                    name="Name"
                    required
                  />
                  <input
                    type="text"
                    class="field"
                    placeholder="Your Email"
                    name="Email"
                    required
                  />
                  <input
                    type="text"
                    class="field"
                    placeholder="Phone"
                    name="Phone Number"
                    required
                  />
                  <input
                    type="number"
                    class="field"
                    placeholder="No of Persons"
                    name="No Of People"
                  />
                  <div className="boxdate">
                  <label for="html" className='label'>Check In</label>
                <input placeholder="Check In" class="field" type='date' name="Check In"/>
                <label for="html">Check Out</label>
                <input placeholder="Check Out" class="field" type="date" name="Check Out"/>
                  </div>
                  <button class="btn" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Sec>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Accomodation() {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const data = [
    {
      image: [Room11, Room12, Room13, Room14],
      title: "Beach Front Huts",
      subTitle:
        "We have 2 beautiful beach front huts which sit directly on the beach overlooking the Arabian Sea. ",
    },
    {
      image: [Room21, Room22, Room23, Room24, Room25],
      title: "Sea View Huts",
      subTitle:
        "Our 2 sea view huts are elevated just behind the beach front huts to give you more privacy with stunning views of the sea.",
    },
    {
      image: [Room31, Room32, Room33, Room34, Room35, Room36],
      title: "Standard Huts",
      subTitle:
        "Our standard huts are made of wood with Indian rice grass water-tight thatched roofs.",
    },
    {
      image: [Room41, Room42, Room43, Room44, Room45, Room46],
      title: "Superior AC Cottages",
      subTitle:
        "Our two superior AC cottages are concrete built with a tiled roof quietly situated to the rear yet still a minute walk to the beach.",
    },
    {
      image: [Room51, Room52, Room53, Room54],
      title: "Budget Huts",
      subTitle:
        "Our 2 budget huts are built the same way as the standard huts, just a little further away from the beach.",
    },
  ];
  const roomtype = [
    "All",
    "Beach Front Huts",
    "Sea View Huts",
    "Standard Huts",
    "Superior AC Cottages",
    "Budget Huts",
  ];
  const [active, setActive] = useState(1);
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Section id="accomodation">
      <div>
        <h1 className="title">Accomodation</h1>
      </div>

      <div className="container" onWheel={handleScroll}>
        {data.map((roomimages) => {
          return (
            <div className="roomimages">
              <img src={roomimages.image[0]} alt="" />
              <h3>{roomimages.title}</h3>
              <p>{roomimages.subTitle}</p>

              <Button
                className="roombutton"
                onClick={() => {
                  setModalShow(true);
                  setModalData(roomimages);
                }}
              >
                View Room
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                room={modalData}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem;
 
  .title {
    text-align: center;
    font-size: 4rem;
    font-family: "Lobster", cursive;
  }

  .container {
    padding: 1.5rem 2rem;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    max-width:90%;
    .roomimages {
      margin: 1.5rem;
      padding: 2rem;
      border-radius: 1rem;
      display: inline-block;
      gap: 0.5rem;
      flex: 0 0 auto;
      background-color: #f2f2f2;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      width: 40%;
      h3{
        margin-top:0.5rem;
            font-family: 'Lobster', cursive;
          }
          p{
            font-family: 'Archivo', sans-serif;
          }
      img {
        width: 100%;
        border-radius: 1rem;
        height: 400px;
        margin-top: 1rem;
      }
      .roombutton{
        padding:0.4rem ;
        border-radius:0.5rem;
        background-color:#000 ;
        color:#fff
        border:none;
      }
    }
  }
  .container::-webkit-scrollbar {
    height: 8px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  .container::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }

  @media  screen and (max-device-width: 1080px) {
  .title{
    font-size:3rem;
  }
  .container {
    padding: 1rem;
     
    .roomimages {

      width: 80%;
    
    }
  }
  }

  @media  screen and (max-device-width: 600px) {
    padding: 0.6rem;
  .container {
    padding: 0rem;
    width:100%;
    .roomimages {
        margin: 1rem;
      padding: 0.3rem;
      width: 70%;
      img {
        width: 100%;
        border-radius: 1rem;
        height: 200px;
        margin-top: 1rem;
      }
    }
  }
  }
`;

const Sec = styled.section`
  display: flex;
  flex-direction: column;
  label{
    font-family: "Lobster", cursive;
    font-size:1rem; 
    margin-right:3px;
}
  .Modalbox {
    display: flex;
    flex-direction: row;
  }

  p {
    font-size: 1.2rem;
    font-family: "Archivo", sans-serif;
  }
  .sub {
    font-size: 1.1rem;
  }
  .desc {
    margin-top: 10px;
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
  }
  .titlemain {
    font-family: "Lobster", cursive;
    font-size: 2rem;
    text-align: center;
  }
  .Modalboxleft {
    width: 50%;
    padding: 1rem;
    .carousel {
      width: 100%;
    }
    .carousel-item {
      img {
        object-fit: cover;
        height: 300px;
        width: 100%;
      }
    }
  }
  .Modalboxright {
    padding: 1rem 2rem;
    width: 50%;
    .field {
      width: 100%;
      border: 2px solid rgba(0, 0, 0, 0);
      outline: none;
      background-color: rgba(230, 230, 230, 0.6);
      padding: 0.5rem 0.5rem;
      font-size: 1rem;
      margin-bottom: 5px;
      transition: 0.3s;
    }
    .field:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .btn {
      width: 100%;
      padding: 0.5rem 1rem;
      background-color: #000;
      color: #fff;
      font-size: 1.1rem;
      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.3s;
      margin-top: 1rem;
    }

    .btn:hover {
      background-color: #27ae60;
    }

    .field:focus {
      border: 2px solid rgba(30, 85, 250, 0.47);
      background-color: #fff;
    }
    .boxdate {
      display: flex;
      flex-direction: row;
      input {
        margin: 5px;
      }
    }
  }
  @media  screen and (max-device-width: 1080px) {
    p {
    font-size: 1rem;
    
  }
  label{
    font-family: "Lobster", cursive;
    font-size:1rem; 
}

  .sub {
    font-size: 1.1rem;
  }
  .desc {
    margin-top: 10px;
    font-size: 1.3rem;
  }
  .titlemain {
    
    font-size: 1.7rem;
    
      margin-bottom:0.5rem;
     
  }
    .Modalbox {
    display: flex;
    flex-direction: column;
  }
  .Modalboxleft {
    width: 100%;
    padding: 0.5rem 1rem;

    .carousel-item {
      img {
        object-fit: cover;
        height: 300px;
        width: 100%;
      }
    }
  }

  .Modalboxright {
    padding: 0.5rem 1rem;
    width: 100%;
    .field {
      padding: 0.3rem 0.3rem;
      font-size: 0.8rem;
      margin-bottom: 5px;
      transition: 0.3s;
    }
    .boxdate {
      display: flex;
      flex-direction: column;
    input{
      margin:2px 0px;
    }
    }
  }
}
`;
