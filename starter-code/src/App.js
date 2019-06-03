import React, {Component} from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Nav from "../components/Nav"
import "./App.css"

class App extends Component {

  render() {
    let nav
    const Hello = <h1>Say Hello to ReactJS!</h1>
    const welcomeText = <p>You will learn a Frontend framework from scratch, to became a ninja developer</p>

    return (
      <div>
        <section className="hero">
          <Nav logo="images/ironhack-logo.svg" menu="images/menu-top.svg" />
          {Hello}
          {welcomeText}
          <Button />
        </section>
        <section className="infoSection">
          <Card imgUrl="images/icon1.png" header="Declarative" text="React makes it painless to create interactive UIs." />
          <Card imgUrl="images/icon2.png" header="Components" text="Buil encapsulated components that manage their state." />
          <Card imgUrl="images/icon3.png" header="Single-Way" text="A ser of immutable values are passed to the component's" />
          <Card imgUrl="images/icon4.png" header="JSX" text="Statically-typed, designed to run on modern browsers." />
        </section>
      </div>
    )
  }
}

export default App