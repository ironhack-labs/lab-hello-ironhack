import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return(
      <div className="cover-text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <a href="#">Awesome!</a>
      </div>
    )
  }
}

export default Cover;