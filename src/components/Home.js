import React from 'react';
/*import Card from "./Card"*/
import FlipCard from './FlipCard';
const stylesFront=[
  {position:"absolute",top:"30px",left:"80px",color:"white"},
  {position:"absolute",top:"50px",left:"130px",color:"white"},
  {position:"absolute",top:"50px",left:"225px",color:"#38a7ba"},
  {position:"absolute",top:"160px",left:"30px",color:"white"},
  {position:"absolute",top:"160px",left:"70px",color:"#38a7ba"}
]
const textsFront=[
"Hi",
"My Name is ",
"Tomas",
"I like ",
"Codding"

]
const stylesBack=[
  {position:"absolute",top:"20px",left:"220px",color:"white"},
  {position:"absolute",top:"80px",left:"190px",color:"white"},
  {position:"absolute",top:"80px",left:"320px",color:"#38a7ba"},
  {position:"absolute",top:"190px",left:"190px",color:"white"},
  {position:"absolute",top:"190px",left:"260px",color:"#38a7ba"},
  {position:"absolute",top:"190px",left:"310px",color:"white"}

]


const textsBack=[
 "Passionate about My Work ",
"I focus on Front ",
 "End",
"Learning",
"MERN",
"stack"




]


/*const styles = {  
	width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}*/


function Projects(props) {
	//console.log(props)
  return (
    <div className="contForCards"  
    	
    	onMouseOver={props.onMouseOver}          
          onMouseLeave={props.onMouseLeave}
          id={props.id} >

<FlipCard  
{...props} 
  stylesFront={stylesFront} 
  stylesBack={stylesBack}
  textsBack={textsBack} 
  textsFront={textsFront} 
  reversecards={0}
/>
    </div>
  );
}

export default Projects;
