import React from "react";
import reactLogo from "../../public/react-logo.svg";
import Navigation from "./Navigation";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <Main />
        <img src={reactLogo} alt="" />
      </div>
    );
  }
}

export default App;
