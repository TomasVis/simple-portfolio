import React from 'react';

import Card from "./Card";
import NameAndLinks from "./NameAndLinks"
import { DiNodejs } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { FaWordpress } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { DiPhotoshop } from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';



const stylesForDescription = {color:"#38a7ba",position:"absolute",left:"10px",bottom:"15px",width:"280px",fontSize:"0.8em"}

const firstIconStyles = {color:"#38a7ba",position:"absolute",bottom:"60px", left:"30px",height:"2.5em",width:"1.5em"}
const secondIconStyles = {color:"#38a7ba",position:"absolute",bottom:"50px", left:"80px",height:"1.5em",width:"1.5em"}
const thirdIconStyles = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"120px",height:"1.5em",width:"1.5em"}
const fourthIconStyles = {color:"#38a7ba",position:"absolute",bottom:"40px", left:"160px",height:"1.5em",width:"1.5em"}
const fifthIconStyles = {color:"#38a7ba",position:"absolute",bottom:"30px", left:"200px",height:"1.5em",width:"1.5em"}
//const stylesForLinks = {position:"absolute",top:"50px", left:"40px"}
//import '../App.css';
const linksCalculator={
	projectName:"JavaScript Calculator",
	gitLink:"https://github.com/TomasVis/calculator",
	liveLink:"https://javascript-calculator-258317.appspot.com/",

}
const linksUrlShortener={
	projectName:"Url Shortener microservice",
	gitLink:"https://github.com/TomasVis/urlShortener",
	liveLink:"https://shortener-er.herokuapp.com/",

}
const linksWP={
	projectName:"Wordpress page",
	gitLink:"https://github.com/TomasVis/project-wp",
	liveLink:"https://tomas.trial.rocks/project-wp",

}
const linksQuotes={
	projectName:"Quote Generator",
	gitLink:"https://github.com/TomasVis/quotes",
	liveLink:"https://quote-generator-258414.appspot.com/",

}

const iconsCalculator = [


        <DiReact style={firstIconStyles}/>

]
const iconsUrlShortener = [

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
				descriptions={<p style={stylesForDescription}>Fully functional Word Press site</p>}  
				components={iconsWP} 
				links={<NameAndLinks {...linksWP}/>} 
				className="cardWP" 
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
				descriptions={<p style={stylesForDescription}>Makes an Ajax request to Forismatic API<br/> and displayes the returned quote </p>}  
				components={iconsQuotes} 
				links={<NameAndLinks {...linksQuotes}/>} 
				className="cardQuotes" 
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
				descriptions={<p style={stylesForDescription}>
					Takes URL<br/> and returns a short code<br/> 
					
					Deployed on Heroku</p>}  
				components={iconsUrlShortener} 
				links={<NameAndLinks {...linksUrlShortener}/>} 
				className="cardUrl" 
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
				descriptions={<p style={stylesForDescription}>Simple calculator<br /> Has a glowing display</p>} 
				components={iconsCalculator} 
				links={<NameAndLinks {...linksCalculator}/>} 
				className="cardCalc" 
				id={3}
				isOnHover={props.isOnHover} 
				cardInFocus={props.cardInFocus}
			/>
	    </div>
    </div>
  );
}

export default Projects;
