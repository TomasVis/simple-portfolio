import React, {useEffect } from 'react'
/*import ReactDOM from 'react-dom'*/
import { useSpring, animated } from 'react-spring'

/*import NameAndLinks from "./NameAndLinks"*/


//let images = [cardFace,cardFace,cardFace];

 let Card =(props) => {
  const [val, set] = useSpring(() => ({ scale: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [valOp, setOp] = useSpring(() => ({ opacity: 1, config: { mass: 5, tension: 350, friction: 40 } }))
  const [valTextOp, setTextOp] = useSpring(() => ({ opacity: 0, config: { mass: 5, tension: 350, friction: 40 } }))
/*  const [valOp, setOp] = useSpring(() => ({ scale: 1,radius:50, config: { mass: 5, tension: 350, friction: 40 } }))*/
 // console.log("from card "+ props.id+" "+  props.cardInFocus)
  //console.log(props)
/*  useEffect(() => {
    setOp(props.isOnHover&&props.id==props.cardInFocus?{ opacity:0 }:{ opacity: 1 })
    //console.log('count changed', props.isOnHover);

}, [props.isOnHover,props.id,props.cardInFocus,set])*/

  useEffect(() => {
    set(props.isOnHover&&props.id==props.cardInFocus?{ scale: 1.1 }:{ scale: 1 })
    setOp(props.isOnHover&&props.id==props.cardInFocus?{ opacity:0 }:{ opacity: 1 })
    setTextOp(props.isOnHover&&props.id==props.cardInFocus?{ opacity:1 }:{ opacity: 0 })
    //console.log('count changed', props.isOnHover);

}, [props.isOnHover,props.id,props.cardInFocus,set])



//console.log(props.components)
  return (
    <animated.div  className={props.className+" card"} style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`})}}>
    
      {props.links}

       {props.components != undefined ? props.components.map((comp,index) => (
        <animated.div className="icon" key={index} style={{ opacity: valOp.opacity.interpolate((s) =>{ return s})}} >{comp}</animated.div>
        )):""}

          
        <animated.div className="icon"  style={{ opacity: valTextOp.opacity.interpolate((s) =>{ return s})}} >{props.descriptions}</animated.div>
    

    </animated.div>
  )
}

export default Card;
