import React from "react";


function BigSquare(props) {
  return (
    <div className="blueSquare">

      <div className="main">
        <img src={props.logo} alt="" />
        <h1> {props.header} </h1>
        <p> {props.text} </p> <p className="awesome"> {props.awesome} </p>
      </div>

      <div className="imgContainerOne">
        <img className="reactBig" src={props.react} alt="" />
        <img className="reactMediumA" src={props.react} alt="" />
        <img className="reactMediumB" src={props.react} alt="" />
      </div>

      <div className="imgContainerTwo">
      <img className="menu" src={props.menu} alt="" />
        <img className="reactSmall" src={props.react} alt="" />
        <img className="reactSmall" src={props.react} alt="" />
        <img className="reactSmall" src={props.react} alt="" />
      </div>

      
    </div>
  );
}

export default BigSquare;
