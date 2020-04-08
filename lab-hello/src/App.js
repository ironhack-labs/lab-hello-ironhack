import React from "react";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import AwesomeBtn from "./components/AwesomeBtn.js";
import Content from "./components/Content.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <Nav />
          <Header />
          <AwesomeBtn />
        </div>

        <Content />
      </header>
    </div>
  );
}

export default App;
