import React, { Component } from "react";
import Navbar from './components/NavBar'
import BodyMain from './components/BodyMain.js'
import FooterElements from "./components/footerElements.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BodyMain />
        <FooterElements />
      </div>
    );
  }
}





export default App;
