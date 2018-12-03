import React from "react";
import Header from "./components/header/header.js";
import Section from "./components/section/section.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />

      </div>
    );
  }
}

export default App;