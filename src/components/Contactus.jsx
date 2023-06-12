import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contactus = () => {
	const sendEmail = (e) => {
		e.preventDefault();
	  
		// EmailJS parameters
		const serviceID = process.env.REACT_APP_serviceID;
		const templateID =  process.env.REACT_APP_templateID;
		const userID = process.env.REACT_APP_userID;
	  
		// Set the email parameters
		const templateParams = {
		  to_name:'DuckNChill',
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
			toast("Form Submitted Successfully!");
		  })
		  .catch((error) => {
			toast("Form Couldn't be Submitted!");
		  });
	  
		// Reset the form after submission
		e.target.reset();
		
	  };
  return (
    <Section id="enquiry">
	<div class="container">
    <h2 className='header'>Booking Enquiry</h2>
		<div class="contact-box">
				<form name='contact' onSubmit={sendEmail}>
                <input type="text" class="field" placeholder="Your Name" name="Name" required/>
				<input type="text" class="field" placeholder="Your Email" name="Email" required/>
				<input type="text" class="field" placeholder="Phone" name="Phone Number" required/>
                <input type="number" class="field" placeholder='No of Persons' name="No Of People"  min="1" max="20"/>
                 <br /> <label for="html" className='label'>Check In</label><br />
                <input placeholder="Check In" class="field" type='date' name="Check In"/>
                <br /> <label for="html">Check Out</label><br />
                <input placeholder="Check Out" class="field" type="date" name="Check Out"/>
                <button class="btn" type='submit'>Send</button>
                </form>
			</div>
			{/* <div className='contactdetails'>
				<p>Contact us</p>
				<div>
				<a href="mailto:">DucknChill-Agonda@Beaches-Of-Goa.com</a>
				<a href="tel:+917008719018">+91 7008719018</a>
				</div>
				
			</div> */}
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
	</div>
    </Section>

  )
}

export default Contactus

const Section=styled.section`  
margin-top:2rem;    
width:100%;
height:100%;   
/* .contactdetails{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	p{
		color: white;
		font-size:1.3rem;
		font-family: "Lobster", cursive;
	}
	div{
		display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap:0.8rem;
		a{
		color: white;
		text-decoration:none;
		font-size:1.2rem;
	
		:hover{
			color: #ada5a5;
		}
	}
	}
	
}  */
.header{
    font-family: "Lobster", cursive;
    font-size: 4rem;
    color:white;
}
label{
    font-family: "Lobster", cursive;
    font-size:1.3rem; 
}
.container{
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
    flex-direction:column;
	justify-content: center;
	align-items: center;
	padding: 20px 100px;
    background: black url("https://res.cloudinary.com/dgpk08gxo/image/upload/v1682232724/DuckNChill/Asset/contact_yejn2j.png") no-repeat center;
    background-size:cover;
}

.contact-box{
	max-width: 40%;
    display: flex;
    flex-direction:column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #fff;
	box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.19);
    padding: 2rem 2rem;
}

.left{
	background: url("https://res.cloudinary.com/dgpk08gxo/image/upload/v1682232724/DuckNChill/Asset/contact_yejn2j.png") no-repeat center;
	background-size: cover;
	height: 100%;
}

.right{
	padding: 25px 40px;
}

h2{
	position: relative;
	padding: 0 0 10px;
	margin-bottom: 10px;
}

h2:after{
	content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #000;
}

.field{
	width: 100%;
	border: 2px solid rgba(0, 0, 0, 0);
	outline: none;
	background-color: rgba(230, 230, 230, 0.6);
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	margin-bottom: 22px;
	transition: .3s;
}

.field:hover{
	background-color: rgba(0, 0, 0, 0.1);
}


.btn{
	width: 100%;
	padding: 0.5rem 1rem;
	background-color: #000;
	color: #fff;
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: pointer;
	transition: .3s;
    margin-top:10px;
}

.btn:hover{
    background-color: #232B2B;
}

.field:focus{
    border: 2px solid rgba(30,85,250,0.47);
    background-color: #fff;
}

@media screen and (max-width: 1080px){
    .header{
    font-size: 2.5rem;
   
}
.container{
   padding:40px;

}
	.contact-box{
        max-width: 100%;
        padding: 2rem 2rem;
	}
.field{
    width:90%;
}
.btn{
    width:90%;
}
label{
    font-family: "Lobster", cursive;
    font-size:1rem; 
}
}
`