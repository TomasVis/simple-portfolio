    
import React from 'react';



function FlippedFront(props) {
	//console.log(props)
  return (
  	<div >
  	{props.textsFront.map((el, i) => {     

           return (<div key={i} style={props.stylesFront[i]} >{el}</div>) 
        })}



    </div>
    );
}

export default FlippedFront;