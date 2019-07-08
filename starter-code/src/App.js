import React, { Component } from "react";
import Nav from "./Nav";
import ArticleLeft from "./ArticleLeft";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <ArticleLeft />
        <Footer />
      </div>
    );
  }
}

export default App;
