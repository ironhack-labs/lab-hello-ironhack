import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" />
        <h1 />
        <h6 />
        <button />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <h1 />
        <p />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
