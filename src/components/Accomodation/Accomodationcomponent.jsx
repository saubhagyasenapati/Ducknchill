import React from 'react'
import image from "../../Asset/Beach front hut/pic1.jpg"
import image2 from "../../Asset/Budgett hut/Room5.jpg"
import styled from 'styled-components'
const Accomodationcomponent = () => {
  return (
    <Section>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<div className='booking'>
    <div className='title'> 
        <h4>Book A Room</h4>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputNumber4" class="form-label">Number</label>
    <input type="number" class="form-control" id="inputPassword4"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Number Of Room</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Room"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Number Of Person</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Room"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Room Type</label>
    <select id="inputState" class="form-select">
      <option selected>Room Type</option>
      <option>Beach Front Room</option>
      <option>Beach Front Room</option>
      <option>Beach Front Room</option>
      <option>Beach Front Room</option>
    </select>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Book Room Request</button>
  </div>
</form>
    </div>

</div>
 
    </Section>
    
  )
}

export default Accomodationcomponent
const Section=styled.section`
width:100%;

img{
    width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.booking{
    position:absolute ;
    z-index:2;
    right:5%;
    top:25%;
    width:400px;
    height:400px;
    padding:1rem;
    background-color: #ffffff;
    opacity: 0.99;
    border-radius:2rem;
    display:flex ;
    
justify-content:center;
    .title{
    
        color:black;
    }
}
`