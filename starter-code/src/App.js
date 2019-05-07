import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <img src="/images/ironhack-logo.svg" />
      </nav>
    );
  }
}

class Hero extends Component {
  render() {
    return (
      <div>
        <div id="hero-section">
          <div id="hero-container">
            <Nav />
            <h1>
              Say hello to
              <br /> ReactJS
            </h1>
            <p>
              You will learn a frontend framework from scratch
              <br /> to become a ninja developer.
            </p>
            <a href="#">Awesome!</a>
          </div>
        </div>
      </div>
    );
  }
}

const Box = props => {
  return (
    <div>
      <img src={props.url} />
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

const BoxContainer = props => {
  return (
    <div id="box-container">
      <Box url="/images/icon1.png" name="Declarative" desc="description" />
      <Box url="/images/icon2.png" name="Components" desc="description" />
      <Box url="/images/icon3.png" name="Single way" desc="description" />
      <Box url="/images/icon4.png" name="JSX" desc="description" />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <BoxContainer />
      </div>
    );
  }
}

export default App;
