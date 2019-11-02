import React, {useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import shortenerImg from '../assets/urlShortener.png';
import calculator from '../assets/Calculator.png';


import { FaGithub } from 'react-icons/fa';
import { MdWebAsset } from 'react-icons/md';




const stylesFaGithub = {color:"white",position:"absolute",top:"20px", left:"80px",height:"1.5em",width:"1.5em"}
const stylesMdWeb = {color:"white",position:"absolute",top:"60px", left:"80px",height:"1.5em",width:"1.5em"}

let images = [shortenerImg,calculator,calculator];
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

    useEffect(() => {
    sete(props.isTestOnHover&&props.id==props.cardInFocus?{ scale: 2.2, radius:0 }:{ scale: 1,radius:50 })
    //console.log('count changed', props.isOnHover);

}, [props.isTestOnHover])
  return (
    <animated.div
    
      className="card"

      style={{ transform: val.scale.interpolate((s) =>{ return ` scale(${s})`}) }}
    >


          <a href="https://github.com/" target="blank"><FaGithub style={stylesFaGithub}/></a>
          <a href="https://github.com/" target="blank"><MdWebAsset style={stylesMdWeb}/></a>




    <div id="cardChild" className="decorationalWindow"></div>
    </animated.div>
  )
}

export default Card;
