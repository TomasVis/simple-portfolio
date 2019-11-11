    
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWebAsset } from 'react-icons/md';



/*
const stylesFaGithub = {color:"white",position:"static",top:"0", left:"0",height:"1.5em",width:"1.5em"}
const stylesMdWeb = {display:"flex",color:"white",position:"absolute",top:"60px", left:"80px",height:"1.5em",width:"1.5em"}*/


const stylesForLinks = {position:"absolute",top:"50px", left:"40px"}
//let images = [calculator,calculator,calculator];

function NameAndLinks(props) {
	//console.log(props)
  return (
  	<div >
		<h4 style={{position:"absolute",top:"15px",left:"15px",color:"#38a7ba",margin:0}}>{props.projectName}</h4>
		<div style={stylesForLinks}>
		  <a style={{display:"flex",marginBottom:"10px"}} href={props.liveLink} target="blank">
		    <MdWebAsset style={{marginRight:"10px",height:"1.5em",width:"1.5em"}}/>Live page 

		  </a>
		  <a style={{display:"flex",marginLeft:"20px"}} href={props.gitLink} target="blank">
		    <FaGithub style={{marginRight:"10px",height:"1.5em",width:"1.5em"}}/>Code 

		  </a>

		</div>


    </div>
    );
}

export default NameAndLinks;