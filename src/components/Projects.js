import React from 'react';
//import Card from "./Card"
import FlipCard from './FlipCard';
import Card from "./Card"


//import '../App.css';
const firstCard={
	projectName:"JavaScript Calculator",
	gitLink:"https://github.com/TomasVis/calculator",
	liveLink:"https://retro-calculator.herokuapp.com/",

	className:"card1" 

}
const secondCard={
	projectName:"Url Shortener",
	gitLink:"https://github.com/TomasVis/calculator",
	liveLink:"https://retro-calculator.herokuapp.com/",

	className:"card2" 

}
const thirdCard={
	projectName:"Wordpress page",
	gitLink:"https://github.com/TomasVis/calculator",
	liveLink:"https://retro-calculator.herokuapp.com/",

	className:"card3" 

}





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

			<Card {...firstCard} id={0} isOnHover={props.isOnHover} cardInFocus={props.cardInFocus}/>
		</div>
	  	<div  
	  		className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={1} >
	          
			<Card  {...secondCard}id={1} isOnHover={props.isOnHover} cardInFocus={props.cardInFocus}/>
		</div>
		
	  	<div  
			className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={2} >
			<Card {...thirdCard} id={2}isOnHover={props.isOnHover} cardInFocus={props.cardInFocus}/>
	    </div>
    </div>
  );
}

export default Projects;
