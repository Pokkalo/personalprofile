import React from 'react'

import { Row, Col, Container, } from 'react-bootstrap'

const Header = () => {

  // const blocks = [];
  // function bsGenerator(){
    
  //   for(let i = 1; i < 400; i++){
  //     const duration = Math.random() *5
  //     blocks.push(<div className="--header-blocks" 
  //     style={{animationDuration: duration + 2 + 's', backgroundRepeat: "no-repeat"}}
  //     key={i}></div>)
  //   }
  //   console.log(blocks)
  //   return blocks;
  // }
  

  return (

    <div className="--header-videoStyle d-flex justify-content-center align-items-center">
      <div className='--header-videoStyle'>
        
        <img src={require("../imgs/newOrange.jpg")} alt="" className='w-100'/>
        
      </div>

      
      <div className="--header-words d-flex flex-column">
        <div className="--header-textbox text-light">
          <p>Hello, I'm</p>
          <h1>Frank Lo</h1>
          <h3>Welcome to my website! I am a frontend developer</h3>


        </div>
     
      </div>
      
    </div>
  )
}

export default Header