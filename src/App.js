import React,{useEffect} from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Location from './components/Location'
import Accomodation from './components/Accomodation'
import Facilities from './components/Facilities'
import ScrollReveal from "scrollreveal";
import Resturant from './components/Resturant'
import MyGallery from './components/MyGallery'
import About from './components/About'
import Whatsapp from './components/Whatsapp'
import Contactus from './components/Contactus'
import Policies from './components/Policies'
import Awards from './components/Awards'
import Offer from './components/Offer'

 function App() {
  useEffect(()=>
  {
    const sr=ScrollReveal({
      origin:"top",
      distance:"80px",
      duration:1250,
      reset:true,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #about,
      #facility,
      #accomodation,
      #restaurant,
      #location

  
      `,
      {
        opacity:0,
        interval:300,
      }
    )
  },[])
  return (
    <>
    <Navbar/>
    <Hero/> 
    <About/>
    <Accomodation/>
     <Facilities/>
    <Resturant/>
    <Location/>
    <MyGallery/>
    <Whatsapp/>
    {/* <Offer/> */}
    {/* <Awards/> */}
<Policies/>
  <Contactus/>
  <Footer/>
 
  
    </>
  );
}

export default App