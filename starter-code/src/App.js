import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // let imageList = [
    //     '/images/icon1.png',
    //     '/images/icon2.png',
    //     '/images/icon3.png',
    //     '/images/icon4.png'
    // ]
    let liste = [
      {
        title: "Declarative",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
        image: "/images/icon1.png"
      },
      {
        title: "Components",
        description:
          "Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ",
        image: "/images/icon2.png"
      },
      {
        title: "Single-Way",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
        image: "/images/icon3.png"
      },
      {
        title: "JSX",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ",
        image: "/images/icon4.png"
      }
    ];

    return (
      <div className="App">
        <div class="backgroundimage">
          <div className="logoMenu">
            <img src="/images/ironhack-logo.svg" class="logo" />
            <img src="/images/menu-top.svg" class="menu" />
          </div>
          <div className="top">
            <h1 style={{ color: "white", fontSize: "60px" }}>
              {" "}
              Say hello to <br />
              ReactJS
            </h1>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
              sed diam nonumy eirmod tempor invidunt <br />
              ut labore et dolore magna aliquyam.
            </p>
            <div className="button">Awesome</div>
          </div>
          <div className="feature">
            {liste.map(e => {
              return (
                <div>
                  <h1> {e.title}</h1>
                  {e.description}
                  <img src={e.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
