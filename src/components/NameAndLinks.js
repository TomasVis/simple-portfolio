    
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWebAsset } from 'react-icons/md';
import { DiNodejs } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
//import calculator from '../assets/card-calculator.jpg';



const stylesFaGithub = {color:"white",position:"static",top:"0", left:"0",height:"1.5em",width:"1.5em"}
const stylesMdWeb = {display:"flex",color:"white",position:"absolute",top:"60px", left:"80px",height:"1.5em",width:"1.5em"}

/*const stylesDiNodejs = {color:"#38a7ba",position:"absolute",bottom:"60px", left:"30px",height:"2.5em",width:"2.5em"}
const stylesDiMongodb = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"80px",height:"1.5em",width:"1.5em"}
const stylesDiReact = {color:"#38a7ba",position:"absolute",bottom:"20px", left:"100px",height:"1.5em",width:"1.5em"}*/
const stylesForLinks = {position:"absolute",top:"50px", left:"40px"}
//let images = [calculator,calculator,calculator];

function NameAndLinks(props) {
	console.log(props)
  return (
  	<div >
		<h4 style={{position:"absolute",top:"15px",left:"15px",color:"#38a7ba",margin:0}}>{props.projectName}</h4>
		<div style={stylesForLinks}>
		  <a style={{display:"flex",marginBottom:"10px"}} href={props.liveLink} target="blank">
		    <MdWebAsset style={{marginRight:"10px",height:"1.5em",width:"1.5em"}}/> 
		    <div style={{marginRight:"10px"}}>go to Live page</div>
		  </a>
		  <a style={{display:"flex",marginLeft:"20px"}} href={props.gitLink} target="blank">
		    <FaGithub style={{marginRight:"10px",height:"1.5em",width:"1.5em"}}/> 
		    <div>go to Code</div>
		  </a>

		</div>
{/*		<DiNodejs style={stylesDiNodejs}/>
        <DiMongodb style={stylesDiMongodb}/>
        <DiReact style={stylesDiReact}/>*/}
{/*        <img src={calculator} style={{position:"absolute",right:0,zIndex:-1,backgroundSize:"cover",height:"230px"}}/>*/}




{/*    <div id="cardChild" className="decorationalWindow"></div>*/}

    </div>
    );
}

export default NameAndLinks;