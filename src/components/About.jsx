import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Section id="about">
      <div className="content">
        <div className="title">
          <h1>About Us</h1>
          <p>
            Introducing our handcrafted beach side resort, situated in the North
            of Agonda beach at the stunning meeting point of the Arabian Sea and
            the river. 
            </p>
            <p>DuckNChill is a striking manifestation of Shiv’s
            immense sense of pride in Indian roots. Right from the idea of the
            resort to its design, planning, and execution everything evolved
            from owner’s passion and single-minded determination to create a
            property that is completely handcrafted.</p>
           
         
          <p>
          It’s a fusion of pine wood
            and coconut leaves. The resort is beautifully landscaped with lush
            green gardens and soothing ocean breezes for ultimate relaxation.
            Watch the breathtaking sunset views and unwind in our
            environmentally-friendly accommodation, designed to blend seamlessly
            with the natural surroundings.
          </p>
        </div>
        <div className="timming">
          <p>Check In:1:00PM</p>
          <p>Check Out:11:00AM</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
const Section = styled.section`
  padding: 2.5rem;
  .content {
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    text-align: center;
    .title {
      h1 {
        font-size: 4rem;
        letter-spacing: 0.2rem;
        font-family: "Lobster", cursive;
      }
      p {
        text-align: center;
        margin-top: 1rem;
        font-size: 1.4rem;
        font-family: "Archivo", sans-serif;
      }
    }
    .timming {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: row;
      margin-top: 2rem;
      p {
        font-family: "Archivo", sans-serif;
        font-weight: 800;
        font-size: 1.7rem;
      }
    }
  }
  @media only screen and (max-device-width: 980px) {
    padding: 1rem;
    .content {
      margin-top: 2rem;
      height: 100%;
      width: 100%;
      text-align: center;
      .title {
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1rem;
        }
      }
      .timming {
        p {
          font-weight: 800;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
