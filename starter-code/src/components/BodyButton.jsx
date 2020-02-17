import React from "react";


export default function BodyButton(props){       
    return (
      <div className="BodyButton">
          <a href={props.link}><button className='buttonWhite'>{props.name}</button></a>
      </div>
    );
               
}