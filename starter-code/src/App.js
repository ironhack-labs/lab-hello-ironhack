import React, { Component } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const App = () => {   
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />             
      </div>
    )
};

export default App
