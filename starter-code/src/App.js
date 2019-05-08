import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js"
import Header from "./Header.js"
import Content from "./Content.js"

class App extends Component {

  render() {

  let content1 = {
       imgURL: "/images/icon1.png",
       title: "Declarative",
       text: "Rect makes it painless to create interactive UIs"
     }
   
  let content2 = {
     imgURL: "/images/icon2.png",
     title: "Components",
     text: "Build encapsulated components that manage their state;"
   }

  let content3 = {
     imgURL: "/images/icon3.png",
     title: "Single-Way",
     text: "A set of immutable values are passed to the component's"
   }

  let content4 = {
     imgURL: "/images/icon4.png",
     title: "JSX",
     text: "Statically typed designed to run on modern browsers"
   }

    return (
      <div className="App">
        <Menu />
        <Header />
        <div className="content-items">
          <Content obj={content1}/>
          <Content obj={content2}/>
          <Content obj={content3}/>
          <Content obj={content4}/>
        </div>
      </div>
    );
  }
}

export default App;