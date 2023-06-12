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
            <img
              className="d-block mx-auto"
              src={image1}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktail"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block mx-auto"
              src={image2}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktail"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block mx-auto"
              src={image4}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktail"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block mx-auto"
              src={image5}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktail"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block mx-auto"
              src={image7}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktail"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block mx-auto"
              src={image8}
              alt="Seafood,Meat,Crab,Prawn,Beer,Vodka,Cocktaile"
            />
          </Carousel.Item>
        </Carousel>
        <div className="resturantDetail">
          <p className="aboutrestaurant">
            Beach View Restaurant and Bar is a delightful dining destination
            situated near the beach, which offers both indoor and outdoor
            seating areas. The restaurant has Himachali chefs who specialize in
            creating authentic Indian, local, and international cuisine. Diners
            will delight in the varied menu, which features dishes made with
            locally sourced ingredients that are both fresh and delicious. Sea
            food is our specialty. The bar also serves a range of exotic
            cocktails, local beers, and fine wines. Guests can enjoy a
            picturesque view of the ocean while savoring their meals, making it
            a perfect spot for a pleasant dining experience.
          </p>
          <p>Cuisine Offered</p>
          <ul>
            <li>Fresh Seafood</li>
            <li>Indian</li>
            <li>Continental</li>
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
