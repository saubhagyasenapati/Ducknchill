import React from 'react'
import styled from 'styled-components'

const Policies = () => {
  return (
    <Section id="policy">
      <div>
        <p className='title'>Our Policies</p>
      </div>
      <div >
  
        <ul className='policies'>
  <li><strong>Best Price:</strong> We are offering discounts for our guests booking directly with us via our website most of the time, so please make a clever decision and book directly with us to get the best price.</li>
  <li><strong>Deposit:</strong> You will be charged a 50% deposit to confirm your reservation. Once we receive your deposit, we will send you a confirmation email.</li>
  <li>As we are a small property, late cancellations and no-shows really affect our business, therefore our deposit and cancellation policy is as follows:
    <ul>
     
      <li><strong>Early check out:</strong>If your plans change and you decide to leave earlier, we will understand it as a cancellation and will not be able to refund for all remaining nights.</li>
      <li><strong>Early check in:</strong>If you are arriving at night or early morning, we advise you book your accommodation starting with the previous night so you can check in directly after arrival. Or you can hope for luck that your room will not be occupied the night before and you will not have to wait till other guests check out and the room gets cleaned for you.</li>
      <li><strong>Late check out:</strong>Check out time is 10 am. If you require a later check out, please contact us before 9 am on the day of departure, and we will do our best to accommodate your request. A charge may apply, depending on room availability.</li>
      <li><strong>Non-arrival to the resort(No Show):</strong> If you fail to arrive at the resort till the next day 11 am of your original booking and do not inform us about it in advance by email or phone, we will see this as No Show, and your entire reservation will be cancelled automatically by the resort. You will be charged the cost of the whole reservation.</li>
      <li>Free of charge cancellations are only possible if cancelled at least 14 days prior to your stay. In any other cases, your deposit will not be refunded, but in some cases, we can offer a date change or a credit note for later stays.</li>
    </ul>
  </li>
  <li><strong>Taxes: </strong>All accommodation rates are subject to Goods and Service Tax (GST).</li>
  <li> <strong>Payment:</strong>To pay your bill balance, we accept cash in Rupees, Dollars, Euros, or Pounds. Card payments are also available.</li>
  <li><strong>Pets:</strong>We are a pet-friendly place. We charge a pet fee. There is one dog living at the property.</li>
  <li><strong>Extra Mattress:</strong>We can place an extra single mattress in your room with extra charges.</li>
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