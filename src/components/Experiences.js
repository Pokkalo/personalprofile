import React, { useState } from 'react'
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component'
import { MdWorkOutline, MdOutlineSchool } from 'react-icons/md';

import { timeline } from '../data/YourInfo';




const Experiences = () => {

  let toggleLR = "left"

  let workIconStyles = {background: "#06D6A0"}
  let schoolIconStyles = {background: "#f9c74f"}

  return (
    <div className='--exp-bg' id='experience'>
      <h1 className='--exp-bg-title '>TIMELINE</h1>
      <VerticalTimeline>
        {
          timeline.map(element => {

            let isWorkIcon = element.icon === "work";
            let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";

            if(toggleLR === "left"){
              toggleLR = "right"
            }else{
              toggleLR = "left"
            }

            return (
              <div className="my-3">
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="--exp-TL-date "
                  iconStyle={isWorkIcon? workIconStyles: schoolIconStyles}
                  icon={isWorkIcon? <MdWorkOutline color='white'/> : <MdOutlineSchool color='white'/>}
                  position={toggleLR}
                >
                  <h3 className='vertical-timeline-element-title --exp-TL-title'>
                    {element.title}
                  </h3>
                  <h5 className='vertical-timeline-element-subtitle --exp-TL-location'>
                    {element.location}
                  </h5>
                  <p id="description" className='--exp-TL-description'>{element.description}</p>
                  {showButton && (<a href='/'  className={`--exp-TL-button ${isWorkIcon? "--exp-TL-workButton workButton" : "--exp-TL-schoolButton schoolButton"}`}>{element.buttonText}</a>)}
                </VerticalTimelineElement>

              </div>
              
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Experiences