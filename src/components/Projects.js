import React from 'react';

//import Card from "./Card"
import FlipCard from './FlipCard';
import Card from "./Card";
import NameAndLinks from "./NameAndLinks"
import { DiNodejs } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { MdWebAsset } from 'react-icons/md';
import { DiMongodb } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { FaWordpress } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { DiPhotoshop } from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';

const stylesFaGithub = {color:"white",position:"static",top:"0", left:"0",height:"1.5em",width:"1.5em"}
const stylesMdWeb = {display:"flex",color:"white",position:"absolute",top:"60px", left:"80px",height:"1.5em",width:"1.5em"}

const stylesForDescription = {color:"#38a7ba",position:"absolute",left:"10px",bottom:"15px",width:"220px",fontSize:"0.8em"}

const firstIconStyles = {color:"#38a7ba",position:"absolute",bottom:"60px", left:"30px",height:"2.5em",width:"1.5em"}
const secondIconStyles = {color:"#38a7ba",position:"absolute",bottom:"50px", left:"80px",height:"1.5em",width:"1.5em"}
const thirdIconStyles = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"120px",height:"1.5em",width:"1.5em"}
const fourthIconStyles = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"160px",height:"1.5em",width:"1.5em"}
const fifthIconStyles = {color:"#38a7ba",position:"absolute",bottom:"30px", left:"200px",height:"1.5em",width:"1.5em"}
//const stylesForLinks = {position:"absolute",top:"50px", left:"40px"}
//import '../App.css';
const firstCard={
	projectName:"JavaScript Calculator",
	gitLink:"https://github.com/TomasVis/calculator",
	liveLink:"https://javascript-calculator-258317.appspot.com/",

}
const secondCard={
	projectName:"Url Shortener microservice",
	gitLink:"https://github.com/TomasVis/urlShortener",
	liveLink:"https://shortener-er.herokuapp.com/",

}
const thirdCard={
	projectName:"Wordpress page",
	gitLink:"https://github.com/TomasVis/project-wp",
	liveLink:"https://tomas.trial.rocks/project-wp",

}
const fourthdCard={
	projectName:"Quote Generator",
	gitLink:"https://github.com/TomasVis/quotes",
	liveLink:"https://quote-generator-258414.appspot.com/",

}

const firstCardIcons = [


        <DiReact style={firstIconStyles}/>

]
const secondCardIcons = [

		<DiNodejs style={{color:"#38a7ba",position:"absolute",bottom:"60px", left:"30px",height:"2.5em",width:"2.5em"}}/>,
        <DiMongodb style={secondIconStyles}/>,


]
const iconsQuotes = [

		<DiReact style={firstIconStyles}/>,
        <DiJqueryLogo style={secondIconStyles}/>,


]
const iconsWP = [

		<FaWordpress style={firstIconStyles}/>,
        <FaSass style={secondIconStyles}/>,
        <FaPhp style={thirdIconStyles}/>,
        <DiMysql style={fourthIconStyles}/>,
        <DiPhotoshop style={fifthIconStyles}/>

]



function Projects(props) {
	//console.log(props)
  return (
  	<div className="contForCards"  >


	    <div

	    	className="cardWrapper"
	      	onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={0} >



			<Card 
				descriptions={<p style={stylesForDescription}>Simple calculator<br /> has a nice looking display</p>} 
				components={firstCardIcons} 
				links={<NameAndLinks {...firstCard}/>} 
				className="card1" 
				id={0}
				isOnHover={props.isOnHover} 
				cardInFocus={props.cardInFocus}
			/>
		</div>
	  	<div  
	  		className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={1} >
	          
			<Card
				descriptions={<p style={stylesForDescription}>Takes a long URL, returns short URL, uses Node.js and MongoDB<br/>
				Deployed on Heroku</p>}  
				components={secondCardIcons} 
				links={<NameAndLinks {...secondCard}/>} 
				className="card2" 
				id={1}
				isOnHover={props.isOnHover} 
				cardInFocus={props.cardInFocus}
			/>
		</div>
		
	  	<div

			className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={2} >

			<Card
				descriptions={<p style={stylesForDescription}>Fully functional Word Press site</p>}  
				components={iconsWP} 
				links={<NameAndLinks {...thirdCard}/>} 
				className="card3" 
				id={2}
				isOnHover={props.isOnHover} 
				cardInFocus={props.cardInFocus}
			/>
	    </div>
	    <div

			className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={3} >

			<Card
				descriptions={<p style={stylesForDescription}>Makes an Ajax request to Forismatic API, returns a random quote and displays it </p>}  
				components={iconsQuotes} 
				links={<NameAndLinks {...fourthdCard}/>} 
				className="card4" 
				id={3}
				isOnHover={props.isOnHover} 
				cardInFocus={props.cardInFocus}
			/>
	    </div>
    </div>
  );
}

export default Projects;
