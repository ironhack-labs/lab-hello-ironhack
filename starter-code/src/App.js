import React, { Component } from "react";
import "./App.css";

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
    const box1 = <div><img src={obj1.img}/><p>{obj1.title}</p><p>{obj1.desc}</p></div>
    const box2 = <div><img src={obj2.img}/><p>{obj2.title}</p><p>{obj2.desc}</p></div>
    const box3 = <div><img src={obj3.img}/><p>{obj3.title}</p><p>{obj3.desc}</p></div>
    const box4 = <div><img src={obj4.img}/><p>{obj4.title}</p><p>{obj4.desc}</p></div>
    return (
      <div>
        <div className="App"><img src="/images/ironhack-logo.svg"/><img src="/images/menu-top.svg"/><h1 className="title">Say hello to ReactJS</h1><p className="text-p">You will learn a Fronted framework from scratch, to becoame an Ninka Developer.</p><button className="boton">Awesome!</button></div>
        <div className="box">{box1}{box2}{box3}{box4}</div>
        
      </div>
    );
  }
}

export default App;