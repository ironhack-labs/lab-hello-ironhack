import React, { Component } from "react";




export const App = () => {
  return (
  <div style={{backgroundColor:"#242442"}}>
    <ImgComponent2/>
    <ImgComponent/>
  <h1 style={{color:"white"}}>Say Hello to ReactJS</h1>
  <h3 style={{color:"white"}}>You will learn a Frontend<br></br>
  framework from scrach, to<br></br> 
  become a Ninja Developer</h3>

  </div>)
};

const ImgComponent = () => {
 return (
   <img src='images/menu-top.svg'></img>
 )
 };

 const ImgComponent2 = () => {
  return (
    <img src='images/ironhack-logo.svg'></img>
  )
  };



