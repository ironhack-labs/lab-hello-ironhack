import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  return (
    <div className="border">
      <div className="App">
        <Navbar />
        <div>
          <Hero />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
