
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Alert, Carousel, Nav,Navbar, NavDropdown, Container } from 'react-bootstrap';

import Nav_bar from './components/Nav_bar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Window from './components/Window';

function App() {

  const [submit, setSubmit] = useState(true)

  return (
    <div className="App">

    {submit === true? 
    <Window closeWindow = {()=> {
      setSubmit(!submit)
    }}/> 
    : null}
      
      <Nav_bar/>
      <Header/>
      <About/>


      <div className='--app-ser-bgsize'>
        <Container >
          <Services/>
        </Container>
      </div>


      <Experiences/>

      <div className="" style={{background: "#f3bc3c"}}>
      <Container className=' py-5'>
      <Contact isSubmit = {submit => setSubmit(submit)} var = {submit}/>
      </Container>
      </div>
    </div>
  );
}

export default App;
