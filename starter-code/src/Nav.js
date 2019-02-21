import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="up">
        <nav>
          <img src="../images/ironhack-logo.svg" alt="" />
          <img src="../images/menu-top.svg" alt="" />
        </nav>

        <section className="section-one">
          <div className="text">
            <h1>Say hello to ReactJS</h1>
            <h2>
              You will learn a Frontend framework from scratch, to became an
              Ninja Developer
            </h2>
            <button class="btn">Awesome!</button>
          </div>

          <div className="background">
            <div className="left-icons-images">
              <img src="../images/react-logo.svg" alt="" />
              <img src="../images/react-logo.svg" alt="" />
              <img src="../images/react-logo.svg" alt="" />
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Nav;
