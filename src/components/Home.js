import React from 'react';
/*import Card from "./Card"*/
import FlipCard from './FlipCard';
import {Link} from 'react-router-dom'
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
  {width:"250px",position:"absolute",top:"20px",left:"220px",color:"white"},
  {width:"200px",position:"absolute",top:"80px",left:"190px",color:"white"},
  {width:"200px",position:"absolute",top:"160px",left:"260px",color:"#38a7ba"},
  {width:"200px",position:"absolute",top:"190px",left:"120px",color:"white"},



]
/*
  <Link style= {navStyle } to="/projects">
          <li>Projects</li>
        </Link>

        <Link style= {navStyle } to="/contacts">
          <li>Contacts</li>
        </Link>
        */

const textsBack=
[
  <div className="stylesForText"   >
    Passionate about My 
      <Link to="/projects">
          <div className="linkInHome"  style={{marginLeft:"5px",marginRight:"5px"}} >Work</div>
      </Link>
  </div>,

  <div className="stylesForText" >I Focus on Front<div style={{ marginLeft:"5px",marginRight:"5px",color:"#38a7ba"}}>End</div></div>,

  <div className="stylesForText" >
    Feel free to
      <Link to="/contacts">
          <div className="linkInHome" style={{marginLeft:"5px",marginRight:"5px"}} >Contact</div>
      </Link>me
  </div>,

  <div className="stylesForText" >Learning<div style={{marginLeft:"5px",marginRight:"5px",color:"#38a7ba"}}>MERN</div>Stack</div>,

]



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
