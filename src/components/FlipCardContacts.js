



import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import FlippedFront from './FlippedFront';
import FlippedBack from './FlippedBack';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdWork } from 'react-icons/md';


function FlipCardContacts(props) {

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className='flippedCardWrapper' >
      <animated.div className={props.reversecards===1?"card back":"card front"} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
      <a href="https://www.linkedin.com/" target="_blank" ><FaLinkedin/></a>,
<a href="https://www.github.com/TomasVis" target="_blank" ><FaGithub/></a>,
<a href="https://www.github.com/TomasVis" target="_blank" ><MdEmail/> write me an email</a>,
<a href="https://www.github.com/TomasVis" target="_blank" ><MdWork/> download resume</a>
{/*		<FlippedFront{...props}/>*/}
      </animated.div>

      <animated.div className={props.reversecards===1?"card front":"card back"} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
{/*		<FlippedBack{...props}/>*/}
      </animated.div>
    </div>
  )
}

export default FlipCardContacts