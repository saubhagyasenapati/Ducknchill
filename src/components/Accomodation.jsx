import React, { useState } from "react";
import styled from "styled-components";
import Room11 from "../Asset/Beach front hut/pic1.webp";
import Room12 from "../Asset/Beach front hut/pic2.webp";
import Room13 from "../Asset/Beach front hut/pic3.webp";
import Room14 from "../Asset/Beach front hut/pic4.webp";
import Room21 from "../Asset/Seaview hut/Room2.webp";
import Room22 from "../Asset/Seaview hut/pic2.webp";
import Room23 from "../Asset/Seaview hut/pic3.webp";
import Room24 from "../Asset/Seaview hut/pic4.webp";
import Room25 from "../Asset/Seaview hut/pic5.webp";
import Room31 from "../Asset/Standard hut/Room3.webp";
import Room32 from "../Asset/Standard hut/pic1.webp";
import Room33 from "../Asset/Standard hut/pic2.webp";
import Room34 from "../Asset/Standard hut/pic6.webp";
import Room35 from "../Asset/Standard hut/pic4.webp";
import Room36 from "../Asset/Standard hut/pic5.webp";
import Room41 from "../Asset/Superior Ac cottage/Room4.webp";
import Room42 from "../Asset/Superior Ac cottage/pic1.webp";
import Room43 from "../Asset/Superior Ac cottage/pic2.webp";
import Room44 from "../Asset/Superior Ac cottage/pic3.webp";
import Room45 from "../Asset/Superior Ac cottage/pic4.webp";
import Room46 from "../Asset/Superior Ac cottage/pic5.webp";
// import Room51 from "../Asset/Budgett hut/Room5.webp";
// import Room52 from "../Asset/Budgett hut/pic1.webp";
// import Room53 from "../Asset/Budgett hut/pic2.webp";
// import Room54 from "../Asset/Budgett hut/pic3.webp";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyVerticallyCenteredModal(props) {
  const [loading, setloading] = useState(false)
  const sendEmail = (e) => {
		e.preventDefault();
    setloading(true)
		// EmailJS parameters
		const serviceID = process.env.REACT_APP_serviceID;
		const templateID =  process.env.REACT_APP_templateID2;
		const userID = process.env.REACT_APP_userID;
	  
		// Set the email parameters
		const templateParams = {
		  to_name:'DuckNChill',
      room_type:e.target.Room.value,
		  from_name: e.target.Name.value,
		  from_email: e.target.Email.value,
		  phone_number: e.target['Phone Number'].value,
		  no_of_people: e.target['No Of People'].value,
		  check_in: e.target['Check In'].value,
		  check_out: e.target['Check Out'].value,
		};
	  
		// Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
		.then((response) => {
		  toast("Booking Enquiry Sent Successfully! we will get back to you soon.");
		  setloading(false);
		})
		.catch((error) => {
      toast("Booking Enquiry couldn't be sent, please contact us on the number +91 7008719018 / +91 7517678938 ");
		  setloading(false);
		});
		// Reset the form after submission
		e.target.reset();
		
	  };
  return (
    <Modal
      {...props}
      fullscreen={true}
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
              <Carousel  variant="dark">
                {props.room.image &&
                  props.room.image.map((img) => {
                    return (
                      <Carousel.Item interval={2000}>
                        <img
                          // className="d-block mx-auto"
                          className="full-width-image"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
           
            </div>
            <div className="Modalboxright">
            <div>
                <p className="desc">Description</p>
                <p className="sub">{props.room.description}</p>
              </div>
            <div >
              <p className="amenities">Amenities</p>
              <ul>
      {props.room.amenties&&props.room.amenties.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
            </div>
              <p className="title">Send Us Details for Booking</p>
              <div class="contact-box">
              <form name='contact' onSubmit={sendEmail}>
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
                    min="1" max="20"
                  />
                  <div className="boxdate">
                  <label for="html" className='label'>Check In</label>
                <input placeholder="Check In" class="field" type='date' name="Check In"/>
                <label for="html">Check Out</label>
                <input placeholder="Check Out" class="field" type="date" name="Check Out"/>
                  </div>
                  <button className="btn" type='submit' disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer
position="bottom-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
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
      subTitle:"Handcrafted Beach Front hut with ocean views, stunning sunsets, and rustic charm. Equipped with AC for comfort. Perfect tropical retreat to relax, unwind, and immerse in nature's beauty.",
      amenties:[  "King size bed",
      "En-suite bathroom",
      "Hot shower",
      "Mosquito net",
      "Fan",
      "Verandah with sofa and a table",
      "Free wifi, Bed linen and towels",
      "Wardrobe",
      "Mini Fridge",
      "Work desk",
      "Mirror",
      "Dry clothes hanger",
      "Air conditioned",
      "2 Sun bed one umbrella",
      "Inside Room sofa and chair"],
      description:
        "This handcrafted beach front hut is the ultimate tropical retreat. With full ocean views and a front-row seat to stunning sunsets, it offers the perfect place to relax and unwind. The hut is equipped with air conditioning, ensuring a comfortable stay no matter the outside temperature. Its unique design features handmade elements that add a rustic charm to the space. This beach front hut is the perfect getaway for anyone looking to disconnect from the hustle and bustle of daily life and immerse themselves in the beauty of nature.",
    },
    {
      image: [Room21, Room22, Room23, Room24, Room25],
      title: "Full Sea View Upstairs Huts",
      subTitle:"Upstairs sea view hut with 180° agonda beach view. Air conditioned for comfort. Private balcony to watch sunset and enjoy the serene surroundings. Cozy and charming retreat for relaxation and ocean tranquility.",
      amenties :[
        "King size bed",
        "Wardrobe",
        "En-suite open bathroom",
        "Hot shower",
        "Mosquito net",
        "Fan",
        "Balcony with table and chairs",
        "Free WIFI, Bed linen and towels"
      ],      
      description:
        "Our handcrafted sea view hut is located upstairs and boasts a stunning 180° agonda beach  view. It is air conditioned to ensure your comfort even on the hottest days. Watch the sunset from your private balcony as you relax and soak in the beauty of the surrounding landscape. This cozy and charming hut is the perfect getaway spot for anyone looking to unwind and experience the tranquility of the ocean.",
    },
    {
      image: [Room31, Room32, Room33, Room34, Room35, Room36],
      title: "Garden View Huts",
      subTitle:"Beautifully crafted garden view hut with traditional coconut leaf roof. Cozy balcony with sofa and table for relaxation. Serene surroundings. Sleep to ocean waves. Handcrafted oasis for a peaceful and authentic tropical experience.",
     amenties : [
        "King size bed",
        "Mosquito net",
        "Fan",
        "Free wifi, Bed linen and towels",
        "En-suite bathroom",
        "Wardrobe"
      ],
      description:
        "This charming garden view hut is a beautifully crafted wooden structure with traditional coconut leaves on the roof to keep the interior cool and comfortable. The hut features a cozy balcony complete with a comfortable sofa and table, offering the perfect spot to relax and soak in the stunning natural surroundings. As night falls, guests can drift off to sleep to the soothing sound of ocean waves. This handcrafted oasis is a true gem for those seeking a peaceful and authentic tropical experience.",
    },
    {
      image: [Room31, Room32, Room33, Room34, Room35, Room36],
      title: "Budget Garden View Huts",
      subTitle:"Budget-friendly garden view hut with unique fusion design of wooden walls and coconut leaf roof. Cool and soothing atmosphere. Balcony with comfortable sofa and table. Perfect for peace and quiet amidst lush greenery.",
     amenties:["Queen size bed",
     "Mosquito net",
     "Fan",
     "Free wifi, Bed linen and towels",
     "En-suite bathroom",
     "Wardrobe"],
      description:
        "The handcrafted budget friendly garden view hut features a unique design is a fusion of wooden walls combined with coconut leaves on the roof, which provides a cool and soothing atmosphere inside the room. The balcony space offers a comfortable sofa and a table for an enjoyable outdoor experience. This room is ideal for people who seek peace and quiet away from the beach crowds, and would like to enjoy the lush greenery and peaceful ambiance of the garden.",
    },
    {
      image: [Room41, Room42, Room43, Room44, Room45, Room46],
      title: "Garden View AC Huts",
      subTitle:"Cozy garden view AC cottage with traditional roof tiles. Balcony with comfortable chairs for relaxation. Air conditioning for comfort. Serene atmosphere amidst lush greenery. Enjoy the natural beauty.",
      amenties:["Queen size bed",
      "Mosquito net",
      "Fan",
      "Free wifi, Bed linen and towels",
      "En-suite bathroom",
      "Wardrobe"],
      description:
        "The garden view AC cottage is a cozy accommodation featuring a traditional roof tiles design as this is durable and  with a balcony offering two comfortable chairs for guests to relax and admire the lush greenery around. The cottage is fitted with an air conditioning unit to ensure a comfortable stay in any weather. The garden view provides a serene atmosphere and a chance to soak in the natural beauty.",
    },
  
  ];

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
              <img src={roomimages.image[0]} alt="Resort Room" />
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
             
            </div>
          );
        })}
         <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                room={modalData}
              />
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 1rem;
 
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
    max-width:100%;
    .roomimages {
      margin: 1.5rem;
      padding: 1.5rem;
      border-radius: 1rem;
      display: inline-block;
      gap: 0.5rem;
      flex: 0 0 auto;
      background-color: #f2f2f2;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      width: 45%;
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
        height: 450px;
        margin-top: 1rem;
        object-fit:cover;
      }
      .roombutton{
        padding:0.5rem ;
        border-radius:0.7rem;
        background-color:#000 ;
        color:#fff;
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
     width:100%;
    .roomimages {
      width: 80%;
    
    }
  }
  }

  @media  screen and (max-device-width: 600px) {
    padding: 0.3rem;
  .container {
    padding: 0.3rem;
    width:100%;
    .roomimages {
        margin: 1rem;
      padding: 0.5rem;
      width: 80%;
      img {
        width: 100%;
        border-radius: 1rem;
        height: 250px;
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
    width:20% ;
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
  ul{
      li{
        font-family: "Archivo", sans-serif;
        font-weight: 600;
      }
    }
  .amenities{
    margin-top: 10px;
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
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
        object-fit: contain;
        height: 500px;
        width: 100%;
      }
    }
  }
  .Modalboxright {
    padding: 1rem 4rem;
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
      background-color: #232B2B;
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

  .amenities{
    font-size: 1.3rem;
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
        object-fit: contain;
        height: 400px;
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
      width: 100%;
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
