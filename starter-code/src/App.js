import React, { Component } from "react";

import IntroPage from "./IntroPage.js";
import SpecificationsOverview from "./SpecificationsOverview.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <IntroPage />
        <SpecificationsOverview />
      </div>
    )
  }
}

export default App;
