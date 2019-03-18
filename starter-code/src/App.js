import React, { Component } from 'react'

import './App.css'

import Atom from '../components/Atom'
import Info from '../components/Info'

export default class App extends Component {
  render() {

    const info1 = {
      image: "/images/icon1.png",
      title: "Declarative",
      text: "React makes it painless to create interactive UIs."
      },
      info2 = {
        image: "/images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state."
      },
      info3 = {
        image: "/images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the components."
      },
      info4 = {
        image: "/images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers."
    },
      atom1 = {
        width: "200px",
        top: "50%",
        right: "50%"
      },
      atom2 = {
        image: "/images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manage their state."
      },
      atom3 = {
        image: "/images/icon3.png",
        title: "Single-Way",
        text: "A set of immutable values are passed to the components."
      },
      atom4 = {
        image: "/images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers."
    }

    return (
      <div>
        <header>
            <Atom {...atom1}/>
            {/* <Atom {...atom2}/>
            <Atom {...atom3}/>
            <Atom {...atom4}/> */}
          <nav>
            <figure className="logo"><img src="images/ironhack-logo.svg"></img></figure>
            <figure className="menu"><img src="images/menu-top.svg"></img></figure>
          </nav>

          <h1>Say hello to <br></br>
            ReactJS</h1>
            <p>You will learn a Frontens<br></br>
               framework from scratch, to <br></br>
               become a Ninja Developer.
            </p>

            <button type="button">Awesome!</button>
          
          {/* <img src="images/react-logo.svg"></img> */}
        </header>
        <section>
          <Info {...info1}/>
          <Info {...info2}/>
          <Info {...info3}/>
          <Info {...info4}/>


        </section>
      </div>
    )
  }
}
