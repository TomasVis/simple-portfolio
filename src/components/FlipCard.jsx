
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import FlippedFront from './FlippedFront';
import FlippedBack from './FlippedBack';


function FlipCard(props) {

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className='flippedCardWrapper' onMouseOver={() => set(state => !state)} onMouseOut={() => set(state => !state)}>
      <animated.div className={props.reversecards===1?"c back":"c front"} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
<FlippedFront{...props}/>
      </animated.div>

      <animated.div className={props.reversecards===1?"c front":"c back"} style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
<FlippedBack{...props}/>
      </animated.div>
    </div>
  )
}

export default FlipCard