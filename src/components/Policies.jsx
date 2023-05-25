import React from 'react'
import styled from 'styled-components'

const Policies = () => {
  return (
    <Section>
      <div>
        <p className='title'>Our Policies</p>
      </div>
      <div >
        <ul className='policies'>
            <li>This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</li>
            <li>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:</li>
            <li>We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</li>
            <li>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.</li>
            <li>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</li>
        </ul>
      </div>
    </Section>
  )
}

export default Policies

const Section=styled.section`
display:flex;
flex-direction:column;
.title {
    text-align: center;
    font-size: 4rem;
    font-family: "Lobster", cursive;
  }
  .policies{
   display:flex;
   flex-direction:column;
   justify-content:center;
    li{
        font-family: 'Archivo', sans-serif;
        font-size:1rem;
        
    }
  }
  @media screen and (max-width: 1080px){
    .title {
    font-size: 3rem;}
    .policies{
        li{
        font-size:0.8rem;
        
    }

    }
  
  } 



`