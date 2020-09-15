import React, { Component } from 'react';

export default function Header(){
  return (

    <div className="main">
      <div className="logos">
        <img src="/images/ironhack-logo.svg"></img>
        <img src="/images/menu-top.svg"></img>
      </div>
      <div className="main-text">
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>You will learn a Frontend</p>
        <p>framework from scratch, to</p>
        <p>became an Ninka Developer</p>
      </div>
      <div className="btn">
        <a>Awesome!</a>
      </div>
    </div>
  
  )
}