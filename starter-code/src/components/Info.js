import React, { Component } from "react";
import "../styles/info.css";

class Info extends Component {
  render() {
    return (
      <div className="information">
        <p className="title">Say hello to 
            <br/> 
            ReactJS
        </p>

        <p className="text">You will learn a Frontend 
            <br/>
            framework from scrath, to 
            <br/>
            become a Ninja Developer.
        </p>
        <button className="button">Awesome!</button>
      </div>
    );
  }
}

export default Info;