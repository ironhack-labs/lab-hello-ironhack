import React, { Component } from "react";

import Card from "./components/Card";
import Nav from "./components/nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <div>
          <Card
            titulo="Say hello to REACTJS"
            parrafo="You will learn a Frontend framework from scratch, to become a Ninja Developer."
          />
        </div>
        <div>
          <a href="#">Awesome</a>
        </div>
      </main>
    );
  }
}

export default App;
