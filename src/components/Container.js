import React, { Component } from 'react';

export default function Container(props){
  return (
     <div className="detail-container">
        <div>
          <img src={props.img}></img>
        </div>
        <div className="detail-text">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
     </div>
  )
}