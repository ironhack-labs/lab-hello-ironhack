import React, { Component } from "react";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="container-father">
        <div className="container-content">
          <h1 className="title">Say hello to ReactJS</h1>
          <p className="text">
            You will learn frontend framework from scratch, to become a Ninja
            Developer
          </p>
          <button className="button">Awesome!</button>
        </div>
      </div>
    );
  }
}
