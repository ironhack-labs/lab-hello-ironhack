import ReactDOM from "react-dom";
import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Benefits from "./Benefits";

class Application extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Nav />
          <Header />
        </div>
        <Benefits />
      </div>
    );
  }
}

export default Application;
