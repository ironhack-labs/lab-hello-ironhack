import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ProductGrid from "./ProductGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ProductGrid></ProductGrid>
      </div>
    );
  }
}

export default App;
