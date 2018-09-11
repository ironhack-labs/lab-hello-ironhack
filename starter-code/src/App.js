import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Content />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation />
        <Info />
      </div>
    )
  }
}

class Navigation extends Component {
  render() {
    return(
      <div className="navigation">
        <img src="/images/ironhack-logo.svg" alt=""/>
        <img src="/images/menu-top.svg" alt=""/>
      </div>
    )
  }
}

class Info extends Component {
  render() {
    return (
      <div className="info">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninka Developer.
        </p>
        <button>Awesome!</button>
      </div>
    )
  }
}



class Content extends Component {
  render() {
    return(
      <div className="content">
        <Card src="/images/icon1.png" alt="" title="Declarative">React makes it painless to create interactive UIs.</Card>
        <Card src="/images/icon2.png" alt="" title="Components">Build encapsulated components that manage their state.</Card>
        <Card src="/images/icon3.png" alt="" title="Single-Way">A set of immutable values are passed to the component's.</Card>
        <Card src="/images/icon4.png" alt="" title="JSX">Satically-typed designed to run on modern browsers.</Card>
      </div>
    )
  }
}

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.src} alt={this.props.alt}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}


export default App
