import React from "react";


export default function BodyText(props){       
    return (
      <div className="BodyText">
        <div class="hello">{props.texte}</div>
        <p>{props.paragraphe}</p>        
      </div>
    );
               
}