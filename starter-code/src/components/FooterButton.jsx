import React from "react";


export default function FooterButton(props){       
    return (
      <div className="footerButton">
          <img src={props.imageF}/>
          <h2>{props.title}</h2>  
          <p>{props.description}</p>
      </div>
    );
               
}