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
        title: "Dec",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ",
        image: "/images/icon1.png"
      },
      {
        title: "Com",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ",
        image: "/images/icon2.png"
      },
      {
        title: "Single",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam ",
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
          <div class="logoMenu">
            <img src="/images/ironhack-logo.svg" class="logo" />
            <img src="/images/menu-top.svg" class="menu" />
          </div>
          <div class="top">
            <h1> Say hello to ReactJS</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <button>Awesome</button>
          </div>
        </div>

        <div class="flex">
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
    );
  }
}

export default App;
