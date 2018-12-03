import React, { Component } from "react";
import "./Card.css";

class App extends Component {
  render() {
    return (
      <div className="Card">
      <img src={this.props.img}></img>
       <h2>{this.props.title}</h2>
       <p>{this.props.description}</p>

      </div>
    );
  }
}

export default App;