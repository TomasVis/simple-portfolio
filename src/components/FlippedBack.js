    
import React from 'react';




/**/


function FlippedFront(props) {
	//console.log(props)
  return (
  	<div className={props.finnished?"finnished":""}>
  	{props.textsBack.map((el, i) => {     

           return (<div key={i} style={props.stylesBack[i]} >{el}</div>) 
        })}


    </div>
    );
}

export default FlippedFront;