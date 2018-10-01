import React, { Component } from "react";
import "./App.css";
import { ReactChachi } from "./reactChachi.js";

const backgroundColor = {
  backgroundColor: "#1f2535a8",
  color: "white",
  width: "100%",
  height: "700px"
};

const display = {
  display:"flex",
}

const Card = (props) => {
  return (
    <div>
      <img src={props.images} width={props.width} height={props.height} alt=""/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
};

const FirstSection = () => {
  return (
    <div style={backgroundColor}>
      
      <nav>
        <img src="../images/ironhack-logo.svg" alt="" />
        <img src="../images/menu-top.svg" alt="" />
      </nav>
      <ReactChachi width={300} height={300} />
      <ReactChachi width={200} height={200} />
      <ReactChachi width={200} height={200} />
      <ReactChachi width={150} height={150} />
      <ReactChachi width={150} height={150} />
      <ReactChachi width={150} height={150} />
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend</p>
      <p>framework from scratch, to</p>
      <p>become a Ninka Delevolper</p>
      <button>Awesome!</button>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div style={display}>
      <Card images={'../images/icon1.png'} width={100} height={100} title='Declarative' text='React makes it painless to create interactive UIs.'/>
      <Card images={'../images/icon2.png'} width={100} height={100} title='Components' text='Build encapsulated components that manage their state.'/>
      <Card images={'../images/icon3.png'} width={100} height={100} title='Single-Way' text='A set of immutable values passed to the components.'/>
      <Card images={'../images/icon4.png'} width={100} height={100} title='JSX' text='Statically-typed, designed to run on modern browsers.'/>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
    </div>
    
  );
};
