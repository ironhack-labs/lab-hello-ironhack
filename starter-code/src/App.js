import React, { Component } from "react";
import "./App.css";
import Objects from "./Object";



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
        <nav>
      <img className="icon-iron" src={"/images/ironhack-logo.svg"}/>
      <img className="menu-top" src={"/images/menu-top.svg"}/>
        <section className="container">
          <h1>Say hello to ReactJS</h1>
          <h3>
            You will learn a Frontend framework from scratch, to become an Ninja
            Developer
          </h3>
          <button className="aw-btn">Awesome!</button>
        </section>
        </nav>
        
        <section className="compCards">
          <div>
          <Objects img={obj1.img} title={obj1.title} desc={obj1.desc}></Objects>
          </div>
          <div>
          <Objects img={obj2.img} title={obj2.title} desc={obj2.desc}></Objects>
          </div>
          <div>
          <Objects img={obj3.img} title={obj3.title} desc={obj3.desc}></Objects>
          </div>
          <div>
          <Objects img={obj4.img} title={obj4.title} desc={obj4.desc}></Objects>
          </div>
        </section>

        
        
        
        

      </div>
    );
  }
}

export default App;
