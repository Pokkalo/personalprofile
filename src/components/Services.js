import React from 'react'
import { Card,Button, Container, Col, Row } from 'react-bootstrap'

import { YourServices, sty } from "../data/YourInfo"

const Services = () => {



  return (
    <>
    
    <Container className='my-5' id='services'>
        <div className="--ser-wrapper flex-column jusfity-content-center align-items-center">
            <h1 className='text-center mb-3 --ser-static-txt m-0'>I am a</h1>
            <ul class="--ser-dynamic-txts m-0 text-center">
                <li><span className='text-underline'>Educator</span></li>
                <li><span className=''>Developer</span></li>
                <li><span className='--ser-minText'>Freelancer</span></li>
            </ul>
        </div>
    <Row className='w-100 mx-auto ' xs={1} lg={sty.CardWidth}>
    
        {YourServices.map((item) => (
        <Col  className="w-100 my-3">
            <Card 

            bg={""}
            key= {sty.buttonBg}
            text={sty.buttonVariant}

            className='text-center h-100 --ser-style mx-3' style={{borderRadius: 14}}>
                <Card.Body className='--ser-style'>
                    <item.icon size={item.icon_size}/>
                    <Card.Title style={{ fontSize: item.ServiceTextSize }}>
                        {item.Service}
                    </Card.Title>
                    <Card.Text style={{fontSize: item.fontSize}}>
                        {item.description}
                    </Card.Text>
                    {item.button? 
                    <Button variant="primary">{item.buttonText}</Button>
                : null
                }

                </Card.Body>
            </Card>
        </Col>
        ))}

    </Row>
    </Container>
    </>
  )
}

export default Services