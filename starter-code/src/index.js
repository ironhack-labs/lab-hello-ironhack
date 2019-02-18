import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home.js";
import { Features } from "./Features.js";
import { Nav } from "./Nav.js";

// ReactDOM.render(<Nav />, document.getElementById("nav"));

// ReactDOM.render(<Home />, document.getElementById("home"));

// ReactDOM.render(<Features />, document.getElementById("features"));

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Features />
      </div>
    );
  }
}


ReactDOM.render(<HomePage/>, document.getElementById('app'));