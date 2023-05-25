import React from "react";
import styled from "styled-components";

const Awards = () => {
  return (
    <Section>
        <p className="title">Awards</p>
      <div className="container">
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/09/47/laurel-wreath-156019_960_720.png"
            alt=""
           
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/21/22/13/award-3694138_960_720.png"
            alt=""
            
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/09/47/laurel-wreath-156019_960_720.png"
            alt=""
          
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/21/22/13/award-3694138_960_720.png"
            alt=""
            
          />
        </div>
      </div>
    </Section>
  );
};

export default Awards;

const Section = styled.section` 
 .title {
    text-align: center;
    font-size: 4rem;
    font-family: "Lobster", cursive;
  } 
.container{
    display:flex;
}
.card{
    flex:1;
    overflow:hidden;
    border:none;
    margin:1rem;
}
.card img{
   
        object-fit:cover;
       
    
}
/* .card:hover{
    flex:2;

}
.card:hover img{
    filter:none;
    
} */

@media screen and (max-width: 1080px){
    .title {

    font-size: 3rem;
    
  } 

}
`;
