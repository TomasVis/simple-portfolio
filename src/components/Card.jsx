import React, {useEffect } from 'react'

import { useSpring, animated } from 'react-spring'



 let Card =(props) => {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [valOp, setOp] = useSpring(() => ({ opacity: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [valTextOp, setTextOp] = useSpring(() => ({ opacity: 0, config: { mass: 5, tension: 350, friction: 40 } }))


  useEffect(() => {
   // console.log(props.id+" "+props.cardInFocus)
    set(props.isOnHover&&props.id==props.cardInFocus?{ scale: 1.1 }:{ scale: 1 })
    setOp(props.isOnHover&&props.id==props.cardInFocus?{ opacity:0 }:{ opacity: 1 })
    setTextOp(props.isOnHover&&props.id==props.cardInFocus?{ opacity:1 }:{ opacity: 0 })


}, [props.isOnHover,props.id,props.cardInFocus,set,setOp,setTextOp])




  return (
    <animated.div  className={props.className+" card"} style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`})}}>
    
      {props.links}

       {props.components != undefined ? props.components.map((comp,index) => (
        <animated.div className="icon" key={index} style={{ opacity: valOp.opacity.interpolate((s) =>{ return s})}} >{comp}</animated.div>
        )):null}


{props.descriptions != undefined ?
        <animated.div className="description"  style={{ opacity: valTextOp.opacity.interpolate((s) =>{ return s})}} >{props.descriptions}</animated.div>
:
null

 }
          
    

    </animated.div>
  )
}

export default Card;
