import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

import NameAndLinks from "./NameAndLinks"


//let images = [cardFace,cardFace,cardFace];

function Card(props) {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [vale, sete] = useSpring(() => ({ scale: 1,radius:50, config: { mass: 5, tension: 350, friction: 40 } }))
 // console.log("from card "+ props.id+" "+  props.cardInFocus)
  console.log(props)

  useEffect(() => {
    set(props.isOnHover&&props.id==props.cardInFocus?{ scale: 1.1 }:{ scale: 1 })
    //console.log('count changed', props.isOnHover);

}, [props.isOnHover])


  return (
    <animated.div  className={props.className+" card"} style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`})}}>
    {props.links}
{props.components}
{/*<NameAndLinks {...props}/>*/}
    </animated.div>
  )
}

export default Card;
