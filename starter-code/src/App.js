import React, { Component } from 'react';
import './App.css';

const mainTitle = <h1>Say hello to ReactJS</h1>;

const firstSection = () => {
  const sentence = (
    <p>
      You will learn a Frontend framework from scratch, to become a ninja
      Developer.
    </p>
  );
  const button = <input type="submit" value="Awesome!" />;
  const result = [mainTitle, sentence, button];

  return result;
};

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} alt="card" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

class App extends Component {
  navbar() {
    const ironhackLogo = (
      <img src="./images/ironhack-logo.svg" alt="ironhack-logo" />
    );
    const menuImg = <img src="./images/menu-top.svg" alt="menu-img" />;

    return (
      <div className="navbar">
        {ironhackLogo}
        {menuImg}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.navbar()}
          <div className="content">
            <section className="titles">{firstSection()}</section>
            <section className="react-logo">
              <img src="./images/react-logo.svg" alt="react-logo" />
            </section>
          </div>
        </div>
        <div className="card-container">
          <Card
            image="./images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Card
            image="./images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Card
            image="./images/icon3.png"
            title="Single-Way"
            description="A set of inmutable values are passed to the component's."
          />
          <Card
            image="./images/icon4.png"
            title="JSX"
            description="Statically-typed designed to run on modern browsers"
          />
        </div>
      </div>
    );
  }
}

export default App;
