import React, { Component } from "react";
import "./App.css";
import Objects from "./Objects";

class App extends Component {
  render() {
    const obj1 = {
      img: "/images/icon1.png",
      title: "Declarative",
      desc: "React makes it painless to create interactive UIs."
    }
    const obj2 = {
      img: "/images/icon2.png",
      title: "Components",
      desc: "Build encapsulate components that manage their state."
    }
    const obj3 = {
      img: "/images/icon3.png",
      title: "Single-Way",
      desc: "A set of inmutable values are passed to the component's."
    }
    const obj4 = {
      img: "/images/icon4.png",
      title: "JSX",
      desc: "Statically-typed, designed to run on modern browsers."
    }
    return (
      <div>
        <div className="App"><img src="/images/ironhack-logo.svg"/><img className="menu" src="/images/menu-top.svg"/><h1 className="title">Say hello to ReactJS</h1><p className="text-p">You will learn a Fronted framework from scratch, to becoame an Ninka Developer.</p><button className="boton">Awesome!</button></div>
        <div className="box">
        <Objects img={obj1.img} title={obj1.title} desc={obj1.desc}></Objects>
        <Objects img={obj2.img} title={obj2.title} desc={obj2.desc}></Objects>
        <Objects img={obj3.img} title={obj3.title} desc={obj3.desc}></Objects>
        <Objects img={obj4.img} title={obj4.title} desc={obj4.desc}></Objects>
        </div>
        
      </div>
    );
  }
}

export default App;