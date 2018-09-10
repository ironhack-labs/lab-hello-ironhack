import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Header />

        <Content />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja
            Developer
          </p>
          <br />
          <button>Awesome!</button>
        </div>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Card src="/images/icon1.png" title="Declarative">
          React makes it painless to create interactive UIs.
        </Card>
        <Card src="/images/icon2.png" title="Components">
          Build encapsulated components that manage their state.
        </Card>
        <Card src="/images/icon3.png" title="Single-Way">
          A set of immutable values are passed to the component's.
        </Card>
        <Card src="/images/icon4.png" title="JSX">
          Satically-typed designed to run on modern browsers.
        </Card>
      </div>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <div class="singlecard">
        <img src={this.props.src} alt="" />
        <h2>{this.props.title}</h2>
        <p> {this.props.children}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
