import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Cards from "./utils/cards.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main">
          <section className="First-box">
            <Nav />
            <h1 className="title">
              Say hello to
              <br />
              ReactJS
            </h1>
            <p className="text">
              You will learn a Frontend
              <br />
              framework from scratch, to
              <br />
              become a Ninja Developer
            </p>
            <button className="buttonHome">Awesome!</button>
          </section>
          <section className="Second-box">
            {Cards.map(card => {
              return (
                <div className="card-box">
                  <img src={card.path} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
