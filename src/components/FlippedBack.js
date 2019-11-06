    
import React from 'react';




const stylesFaGithub = {color:"white",position:"static",top:"0", left:"0",height:"1.5em",width:"1.5em"}
const stylesMdWeb = {display:"flex",color:"white",position:"absolute",top:"60px", left:"80px",height:"1.5em",width:"1.5em"}

const stylesDiNodejs = {color:"#38a7ba",position:"absolute",bottom:"60px", left:"30px",height:"2.5em",width:"2.5em"}
const stylesDiMongodb = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"80px",height:"1.5em",width:"1.5em"}
const stylesDiReact = {color:"#38a7ba",position:"absolute",bottom:"20px", left:"100px",height:"1.5em",width:"1.5em"}
const stylesForLinks = {position:"absolute",top:"50px", left:"40px"}


function FlippedFront(props) {
	//console.log(props)
  return (
  	<div >
  	{props.textsBack.map((el, i) => {     

           return (<div key={i} style={props.stylesBack[i]} >{el}</div>) 
        })}


    </div>
    );
}

export default FlippedFront;