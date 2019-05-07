import React, { Component } from "react";

import HeaderNav from "./HeaderNav.js";
import IntroText from "./IntroText.js";

import "./IntroPage.css";

class IntroPage extends Component {
  render() {
    return (
      <div  className="introPage">
        <HeaderNav />
        <IntroText />
      </div>
    )
  }
}

export default IntroPage;