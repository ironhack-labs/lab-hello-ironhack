import React, { Component } from "react"
import "../public/stylesheets/App.css"
import Nav from "../components/Nav"
import Title from "../components/Title"
import Button from "../components/Button"
import Features from "../components/Features"

class App extends Component {
  render() {
    return (
    <main>
        <header className="header">
            <img className="logo1" src="images/react-logo.svg" />
            <img className="logo2" src="images/react-logo.svg" />
            <img className="logo3" src="images/react-logo.svg" />
            <img className="logo4" src="images/react-logo.svg" />
            <Nav />
            <Title />
            <Button />
        </header>
      <Features />
    </main>
    )
  }
}

export default App
