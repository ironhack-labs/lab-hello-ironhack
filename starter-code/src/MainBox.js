import React, { Component } from 'react';
import Nav from "./Nav";
import Header from "./Header";

class MainBox extends Component {
  render() {
    return (
      <div className="bg">
        <Nav/>
        <Header/>
      </div>
    )
  }
}

export default MainBox;