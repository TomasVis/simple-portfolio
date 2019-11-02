import React from 'react';
//import Card from "./Card"
import FlipCard from './FlipCard';
import Card from "./Card"


import '../App.css';

function Projects(props) {
	console.log(props)
  return (
  	<div>
	  	<h1>{props.title}</h1>

	    <div
	    	className="cardWrapper"
	      	onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={0} >
			<Card  id={0} {...props}/>
		</div>
	  	<div  
	  		className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={1} >
	          
			<Card  id={1} {...props}/>
		</div>
		
	  	<div  
			className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={2} >
			<Card  id={2}{...props}/>
	    </div>
    </div>
  );
}

export default Projects;
