import React, { Component } from "react";
import "./body.css";

export default class body extends Component {
  render() {
    return (
      <div className="body">
        <div className="bodyBlock">
          <h1>Say hello to ReactJs</h1>
          <p className="bodyText">
            You will learn a Fronted framework from scratch, to ecome an Ninka
            Deloper.
          </p>
          <button className="boton">Awesome!</button>
        </div>
      </div>
    );
  }
}
