import React,{useEffect, useState} from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Location from './components/Location'
import Accomodation from './components/Accomodation'
import Facilities from './components/Facilities'
import scrollreveal from "scrollreveal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resturant from './components/Resturant'
import Gallery from './components/Gallery'
import About from './components/About'
import Whatsapp from './components/Whatsapp'
import Contactus from './components/Contactus'
import Thanks from './components/Thanks'

 function App() {
  const [navbarstate,setnavbarstate]=useState();
  useEffect(()=>
  {
    const sr=scrollreveal({
      origin:"top",
      distance:"80px",
      duration:1250,
      reset:true,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #facility,
      #accomodation,
      #location,
     #contact
      `,
      {
        opacity:0,
        interval:300,
      }
    )

  },[])
  return (
    <>
    <Router>
    <Navbar/>
    <Hero/> 
    <About/>
     <Facilities/>
    <Accomodation/>
    <Resturant/>
    <Location/>
    <Whatsapp/>

  <Contactus/>
      <Routes>
        {/* <Route exact path="/thanks" element={<Thanks/>}></Route> */}
        {/* // <Route exact path="/Accomodation" element={<Accomodation/>}></Route>
        // <Route exact path="/Location" element={<Location/>}></Route>
        // <Route exact path="/Facilities" element={<Facilities/>}></Route>
        // <Route exact path="/BookRoom" element={<Accomodationcomponent/>}></Route> */} */}
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App