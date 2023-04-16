import React from 'react'
import { Alert, Button,Container } from 'react-bootstrap'

const Window = (props) => {
  return (
    <div className='position-fixed --wind-bg '>
        <div className="--wind-alert">
            <Alert variant="success" className='--wind-alert'>
                <Alert.Heading>Thank you for your contact</Alert.Heading>
                <p>
                Your message is sent to my email address. I will response it as soon as possible. Sorry for waiting and thank you for your message.
                </p>
                <hr />
                {/* <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p> */}
                <Button onClick={props.closeWindow}>Close</Button>
            </Alert>
        </div>

    </div>
  )
}

export default Window