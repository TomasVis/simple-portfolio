import React from 'react';
import Card from "./Card"
import FlipCard from './FlipCard';


const stylesFront=[
  {position:"absolute",top:"30px",left:"80px",color:"white"},
  {position:"absolute",top:"50px",left:"130px",color:"white"},
  {position:"absolute",top:"50px",left:"220px",color:"#38a7ba"},
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
  {position:"absolute",top:"30px",left:"80px",color:"white"},
  {position:"absolute",top:"50px",left:"130px",color:"white"},
  {position:"absolute",top:"50px",left:"220px",color:"#38a7ba"},
  {position:"absolute",top:"160px",left:"30px",color:"white"},
  {position:"absolute",top:"160px",left:"70px",color:"#38a7ba"},
  {position:"absolute",top:"160px",left:"70px",color:"#38a7ba"}
]


const textsBack=[
"Learning",
"MERN",
"stack",
"focusing on Front",
 "End",
 "Passionate about My Work"


]

function Contacts(props) {
	//console.log(props)
  return (
    <div  className="contForCards ">
   	

<div  
	  		className="cardWrapper"
	  		onMouseOver={props.onMouseOver}          
	        onMouseLeave={props.onMouseLeave}
	        id={0} >
	          
			<Card  className="contactsCard" id={0} isOnHover={props.isOnHover} cardInFocus={props.cardInFocus}/>
		</div>
    </div>
  );
}

export default Contacts;
