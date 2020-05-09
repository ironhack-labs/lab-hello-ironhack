import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
          <Header />
      </div>
      <div className="infos">
          <Footer />
       </div>
      </div>
    );
  }
}

export default App;