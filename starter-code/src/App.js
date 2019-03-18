import React, { Component } from "react"
import "./App.css"
import Nav from "../components/Nav"
import MainText from"../components/MainText"
import Chabeli from"../components/Chabeli"

class App extends Component {
  render() {
    return (
      
      <section>
        <div className="App">
      
          <Nav/>
        </div>
        <div>
          <MainText/>

        </div>
        <section>
          <Chabeli/>
          
        </section>
        </section>
        


      
    );
  }
}

export default App