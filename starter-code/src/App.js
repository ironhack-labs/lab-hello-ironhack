import React, { Component } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Button from "./Button";
import Bottom from "./BottomContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Title />
        <Button />
        <Bottom />
      </div>
    );
  }
}

export default App;
