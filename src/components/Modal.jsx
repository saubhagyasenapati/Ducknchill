//Modal.jsx
import React from "react";
import styled from "styled-components";

import React from 'react'

const Modal = (props) => {
  return (
    <Section>
           <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <p>{props.room.title}</p>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
         diuhuiojvoijvodovnd
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Section>
  )
}

export default Modal


  

const Section = styled.section`
  width: 100%;
  height: 100%;
 

`;
