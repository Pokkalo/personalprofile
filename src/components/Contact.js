import React, { useRef, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { contactConfig } from '../data/YourInfo'


import { GoMailRead } from 'react-icons/go'

const Contact = (props) => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_328gvfa', 
        'template_p0388we', 
        form.current, 
        'hf4uEG1Fep41rTtf3')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          props.isSubmit(!props.var)
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    form.current.reset();
  }, [props.var])

  return (
    <Container className='p-5' id='contact'>

        <Row className="sec_sp ">
          <Col lg="5" className="mb-5 text-light d-flex align-items-center justify-content-center">

           {/* New a email graph */}
           <GoMailRead size={300}/>
           

          </Col>

          <Col lg="7" className="d-flex align-items-center rounded">
            
            <Form  
            ref={form}
            className="contact__form w-100 p-3 rounded" 
            onSubmit={sendEmail}
            >
              
              <Form.Group className='d-flex flex-column'>
                <h1 className=" py-4 text-light">Get in touch</h1>

                  <Form.Control 
                  type="text" 
                  className="form-control bg-light my-1 --cont-inp-rounded"
                  id="user_name"
                  name="to_name"
                  placeholder="Name" 
                  color='green'
                  />
               
                
                  <Form.Control 
                    className="form-controlbg-light my-1 --cont-inp-rounded"
                    id="user_email"
                    name="from_name"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                
              
                  <Form.Control as="textarea" rows={5} 
                    className="form-control bg-light my-1 --cont-inp-rounded"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                  />
                  <br />
              
                  <Button className="btn ac_btn border --cont-inp-rounded" type="submit" value="Send" variant='light'> 
                  Send
                  </Button>
                  {/* <button className="btn ac_btn text-light bord" type="submit">
                    Send
                  </button> */}
                
              </Form.Group>
              
            </Form>
          </Col>
        </Row>
    </Container>
  )
}

export default Contact