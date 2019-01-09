import React, { Component } from "react";
import "./App.sass";
import NavBar from "./components/NavBar.jsx";
import Item from "./components/Item.jsx";
import INFO from "./config.js";

class App extends Component {
  render() {
    return (
      <div className="app">

        <section className="firstSection">
          <div className="content">
            <NavBar/>
            <header className="header">
              <h1 className="headerTitle">Say hello to ReactJS</h1>
              <h2 className="headerSubtitle">You will learn a Frontend framework from scratch, to become a Ninka Delveloper.</h2>
              <button className="headerBtn">Awesome!</button>
            </header>
          </div>
        </section>

        <section className="secondSection">
          <div className="content">
            {INFO.map(({img, title, description}, i)=> <Item key={i} img={img} title={title} description={description}/>)}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
