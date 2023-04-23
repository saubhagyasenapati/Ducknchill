import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Asset/Restaurant/image1.jpg"
import image2 from "../Asset/Restaurant/image2.jpg"
import image3 from "../Asset/Restaurant/image3.jpg"
import image4 from "../Asset/Restaurant/image4.jpg"
import image5 from "../Asset/Restaurant/image5.jpg"
import image6 from "../Asset/Restaurant/image6.jpg"
import image7 from "../Asset/Restaurant/image7.jpg"
import image8 from "../Asset/Restaurant/image8.jpg"
const Resturant = () => {
  return (
    <Section id="restaurant">
      <div>
        <h1>Restaurant</h1>
      </div>
      <div className="resturantbox">
      <Carousel>
                <Carousel.Item interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image5}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image7}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img
                  className="d-block mx-auto"
                  src={image8}
                  alt="Third slide"
                />
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
      object-fit:cover;
      height: 600px;
      width: 100%;
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
      object-fit:cover;
      height: 300px;
      width: 100%;
    }
  }
    .resturantbox {
      display: flex;
      flex-direction: column;
    }
  }
`;
