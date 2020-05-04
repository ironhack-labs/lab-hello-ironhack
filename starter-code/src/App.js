import React, { Component } from "react";
import "./App.css";
import Header from './components/header'; 
import Cards from './components/cards';
 
class App extends Component {
    render() {
        return (
          <div className = "App">
            <Header />
            <Cards />
          </div>
        )
      }
}
 
export default App;