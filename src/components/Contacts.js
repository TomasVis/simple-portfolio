//TODO Real resume real linked in


import React from 'react';
import Card from "./Card"

import Form from './Form';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { MdWork } from 'react-icons/md';


const iconStyles = {marginRight:"10px",height:"1.5em",width:"1.5em"}
const components = 
<div>

  <a href="https://www.linkedin.com/in/tomas-bagusis/" target="_blank" rel="noopener noreferrer"  style={{position:"absolute",left:"340px",top:"20px",}} ><FaLinkedin style={iconStyles}/>LinkedIn</a>,
  <a href="https://www.github.com/TomasVis" target="_blank" rel="noopener noreferrer" style={{position:"absolute",left:"340px",top:"50px"}}><FaGithub style={iconStyles}/>GitHub</a>,
  <a href="http://tomasit.com/TOMAS_BAGUSIS_CV.pdf" target="_blank" style={{position:"absolute",left:"340px",top:"80px"}}><MdWork style={iconStyles}/>Resume</a>
  <Form/>
</div>



function Contacts(props) {
	//console.log(props)
  return (
    <div  className="contForCards ">

    
      <div  
  	  		className="cardWrapper"
  	  		onMouseOver={props.onMouseOver}          
  	        onMouseLeave={props.onMouseLeave}
  	        id={0} >
       
 			<Card links={components} className="contactsCard" id={0} isOnHover={props.isOnHover} cardInFocus={props.cardInFocus}/>
  		</div>

    </div>
  );
}

export default Contacts;
