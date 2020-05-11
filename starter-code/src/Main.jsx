import React, { Component } from "react";
import Navbar from "./Navbar.jsx";

class Main extends Component {
  render() {
    return (
      <div>
        <section className="background">
          <Navbar></Navbar>
          <section className="text-box">
            <h1 className="title">
              Say hello to <br /> ReactJS
            </h1>
            {/* <img src="/images/react-logo.svg" alt="" /> */}
            <p className="text">
              You will learn a Frontend <br /> framework from scratch, to <br />{" "}
              become an Ninka Developer
            </p>
            <button className="btn">Awesome!</button>
          </section>
        </section>
      </div>
    );
  }
}

export default Main;
