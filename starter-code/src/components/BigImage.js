import React, { Component } from "react";
import "../stylesheets/BigImage.css";

class BigImage extends Component {
  callToActionButton() {
    return (
      <div className="button-wrapper">
        <a class="effect1" href="#">
          Let's Go!
          <span class="bg" />
        </a>
      </div>
    );
  }

  render() {
    return <div className="BigImage">{this.callToActionButton()}</div>;
  }
}

export default BigImage;
