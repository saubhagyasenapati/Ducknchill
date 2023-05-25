import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Asset/Restaurant/photo1.webp";
import image2 from "../Asset/Restaurant/photo2.webp";
import image4 from "../Asset/Restaurant/photo4.webp";
import image5 from "../Asset/Restaurant/photo5.webp";
import image7 from "../Asset/Restaurant/photo7.webp";
import image8 from "../Asset/Restaurant/photo9.webp";
const Resturant = () => {
  return (
    <Section id="restaurant">
      <div>
        <h1>Restaurant & Bar</h1>
      </div>
      <div className="resturantbox">
        <Carousel variant="dark">
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block mx-auto" src={image8} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="resturantDetail">
          <p className="aboutrestaurant">
            Here at Duck n Chill, we have a cozy bar and restaurant overlooking
            the Arabian Sea beach where you can enjoy listening to good music
            whilst watching the waves lap the seashore. From breakfast through
            to dinner, we will cater for everything to ensure you have the most
            pleasurable stay. We take pride in serving you the best Goan cuisine
            and fresh fish Agonda has to offer. Kingfish is the most common
            delicacy, followed by shellfish such as crabs, shrimps, king prawns,
            lobster and mussels. For lighter meals, we have freshly squeezed
            fruit juices, tropical fruit salads, sandwiches and plenty of other
            national and international cuisines to suit all tastes. Location
          </p>
          <p>Cuisine Offered</p>
          <ul>
            <li>Italian</li>
            <li>Mexiacan</li>
            <li>Indian</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Resturant;

const Section = styled.section`
  padding: 2rem;

  h1 {
    font-family: "Lobster", cursive;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .carousel {
    width: 50%;
    padding: 1rem;
  }
  .carousel-item {
    img {
      object-fit: contain;
      height: 600px;
      width: 100%;
      background-color: white;
    }
  }
  .resturantDetail {
    width: 50%;
    padding: 1rem;
    p {
      font-size: 1.3rem;
      font-family: "Archivo", sans-serif;
    }
    li {
      font-size: 1.3rem;
      font-family: "Archivo", sans-serif;
    }
  }
  .resturantbox {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-device-width: 1080px) {
    padding: 0.5rem;
    h1 {
      font-size: 3rem;
      margin-top: 1.5rem;
    }
    .resturantDetail {
      width: 100%;
      padding: 1rem;
      p {
        font-size: 1rem;
        font-family: "Archivo", sans-serif;
      }
      li {
        font-size: 1rem;
        font-family: "Archivo", sans-serif;
      }
    }
    .carousel {
      width: 100%;
      padding: 1rem;
    }
    .carousel-item {
      img {
        object-fit: contain;
        height: 400px;
        width: 100%;
        background-color: white;
      }
    }
    .resturantbox {
      display: flex;
      flex-direction: column;
    }
  }
`;
