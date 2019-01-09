import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="./images/ironhack-logo.svg" />
        <img src="./images/menu-top.svg" />
      </div>
    );
  }
}

class SectionOne extends Component {
  render() {
    return (
      <div className="sectionOne">
        <div className="welcomeText">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become an Ninka
            Developer.
          </p>
        </div>
        <div className="callAction">
          <a href="#">Awesome!</a>
        </div>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <div class="col-4">
        <img src={this.props.info.img} alt="" />
        <h2>{this.props.info.h2}</h2>
        <p>{this.props.info.p}</p>
      </div>
    );
  }
}

class SectionTwo extends Component {
  render() {
    const info = [
      {
        img: "./images/icon1.png",
        h2: "Declarative",
        p: "React makes it painless to create interactive UIs"
      },
      {
        img: "./images/icon2.png",
        h2: "Components",
        p: "Build encapsulated components that manage their state."
      },
      {
        img: "./images/icon3.png",
        h2: "Single-Way",
        p: "A set of immutable values are passed to the component's"
      },
      {
        img: "./images/icon4.png",
        h2: "JSX",
        p: "Statucally-typed designed to run on modern browsers"
      }
    ];
    return (
      <div className="sectionTwo">
        <div class="row">
        <Item info={info[0]} />
        <Item info={info[1]} />
        <Item info={info[2]} />
        <Item info={info[3]} />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionOne />
        <SectionTwo />
      </div>
    );
  }
}

export default App;
