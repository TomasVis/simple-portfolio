import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'


function FlipCard() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className='flippedCardWrapper' onMouseOver={() => set(state => !state)} onMouseLeave={() => set(state => !state)}>
      <animated.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <div style={{color:"white"}}>Hi</div>
        <div style={{color:"white"}}>My Name is Tomas</div>
        <div style={{color:"white"}}>I like CODDING</div>
      </animated.div>

      <animated.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <div style={{color:"#38a7ba",position:"absolute",right:"20px"}}>Enjoy  working with MERN Stack</div>
        <div style={{color:"#38a7ba",position:"absolute",right:"20px",top:"40px"}}>Focused on Front End</div>
        <div style={{color:"#38a7ba",position:"absolute",right:"20px",top:"80px"}}>Passionate about My Work</div>
      </animated.div>
    </div>
  )
}

export default FlipCard