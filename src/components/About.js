import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div class="jumbotron-fluid mt-5" id='about' >
  <Container className='
    d-flex  align-items-around justify-content-center
    flex-column flex-lg-row
  '>
   
      <img src="imgs/me.png" alt="" 
      
      className='d-flex justify-content-center 
      mx-auto'
      />

    <div className="d-flex flex-column justify-content-center">
      <h1>About me</h1>
      <br />
      <p class="lead">
      Full name Lo Pak Hang, with a Engineering major aspiring to pursuing a career in programming. A Taekwondo enthusiast recognized as serious, concentrated and active by peer. Academically outstanding, with a knack of software skills in programming. Once developed and completed the robot arm with object classification as a warehouse picking system by using arduino in final year project, and developed an simple e-commerce webpage by React and Firebase
      </p>
    </div>
    
  </Container>
</div>
  )
}

export default About