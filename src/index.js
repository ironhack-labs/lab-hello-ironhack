import React from "react";
import ReactDOM from "react-dom";

class Icon extends React.Component {
  render() {
    return (
      <div class="icon">
        <img class="icon-img" src={this.props.src} />
        <h3>{this.props.name}</h3>
        <p>{this.props.blurb}</p>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <img src="./images/ironhack-logo.svg" />
        <img src="./images/menu-top.svg"></img>
      </div>
    );
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <div class="top">
          <Nav />
          <div>
            <h1>
              Say hello to<br></br> ReactJs
            </h1>
            <h2>
              You will learn a Frontend framework from scratch, to become an
              Ninka Developer.
            </h2>
            <button>Awesome!</button>
          </div>
        </div>
        <div class="bot">
          <Icon
            name="Declarative"
            src="./images/icon1.png"
            blurb="React makes it painless to create interactive UIs"
          />
          <Icon
            name="Components"
            src="./images/icon2.png"
            blurb="Build encapsulated components that manage their state."
          />
          <Icon
            name="Single-Way"
            src="./images/icon3.png"
            blurb="A set of immutable values are passed to the component's"
          />
          <Icon
            name="JSX"
            src="./images/icon4.png"
            blurb="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("app"));
