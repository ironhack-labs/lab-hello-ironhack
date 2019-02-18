import React from "react";
import "./Objects.css";


function Objects (props){
  return <div><img src={props.img}/><h3 className="title-obj">{props.title}</h3><p className="desc-obj">{props.desc}</p></div>
}

export default Objects;