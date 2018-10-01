import React, { Component } from "react";


export const App = () => {
  return (
    <div>
  <div style={{backgroundColor:"#242442"}}>
   <ImgComponent src='images/ironhack-logo.svg'/>
    <ImgComponent src='images/menu-top.svg'/>
  <h1 style={{color:"white"}}>Say Hello to ReactJS</h1>
  <h3 style={{color:"white"}}>You will learn a Frontend<br></br>
  framework from scrach, to<br></br> 
  become a Ninja Developer</h3>
  <button style={{backgroundColor:"white", color:"#242442"}} >Awesome!</button>
  </div>
  <BlockComponent src='images/icon1.png' title='Declarative' text='Lorem fistrum no puedor va usté muy cargadoo pecador me cago en tus muelas de la pradera.'/>
  <BlockComponent src='images/icon2.png' title='Components' text='Lorem fistrum no puedor va usté muy cargadoo pecador me cago en tus muelas de la pradera.'/>
  <BlockComponent src='images/icon3.png' title='Single-Way' text='Lorem fistrum no puedor va usté muy cargadoo pecador me cago en tus muelas de la pradera.'/>
  <BlockComponent src='images/icon4.png' title='JSX' text='Lorem fistrum no puedor va usté muy cargadoo pecador me cago en tus muelas de la pradera.'/>
  </div>
  )
};

const ImgComponent = (props, props2) => {
 return (
   <img src={props.src}></img>
 )
 };

 const BlockComponent = (props) => {
   return (
    <div>
    <img src={props.src}></img>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
   </div>
   )
 }









