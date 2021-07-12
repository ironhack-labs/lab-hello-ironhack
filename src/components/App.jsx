import React from "react";
import Navbar from "./navbar/Navbar";
import IntroSection from "./intro-section/IntroSection";
import UspSection from "./usp-section/UspSection";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <IntroSection />
        <UspSection />
      </div>
    );
  }
}

export default App;
