import React, { Component } from "react";

const icon1 = "/images/icon1.png";
const icon2 = "/images/icon2.png";

class App extends Component {
  render() {
    return (
      <div>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
      </div>
    );
  }
}

export default App;
