import React from "react";
import "./Box.css";

function Box(props) {
    return(
        
        <div className="Box">
            <img src={props.img}/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    ) 

}

export default Box;