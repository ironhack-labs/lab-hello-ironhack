import React from "react";


export default function BodyButton(props){
        
    const mystyle = {
      color: props.color,
      backgroundColor: props.bgcolor,
      width: "200px",
      height: "40px",
    };
        
    return (
      <div className="BodyButton">
          <a href={props.link}><button  style={mystyle}>{props.name}</button></a>
      </div>
    );
               
}