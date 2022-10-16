import React,{useEffect} from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Location from './components/Location'
import Accomodation from './components/Accomodation'
import Facilities from './components/Facilities'
import scrollreveal from "scrollreveal";
 function App() {
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
      footer
      `,
      {
        opacity:0,
        interval:300,
      }
    )
  },[])
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Hero/>
    <Facilities/>
    <Accomodation/>
    <Location/>
    <Footer/>
    </>
  );
}

export default App