import React from 'react';
import Card from "./Card"
import FlipCard from './FlipCard';


//import '../App.css';
const styles = {  
	width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"}
function Projects(props) {
	console.log(props)
  return (
    <div  
    	style={styles}
    	onMouseOver={props.onMouseOver}          
          onMouseLeave={props.onMouseLeave}
          id={props.id} >

<FlipCard  {...props}/>
    </div>
  );
}

export default Projects;
