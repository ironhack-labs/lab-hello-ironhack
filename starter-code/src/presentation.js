import React from "react";
import "./presentation.css";

export default class Presentation extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="presentation">
      <nav>
      <ul>
        <li><img src="/images/ironhack-logo.svg" alt="Ironlogo"/></li>
        <li><img src="/images/menu-top.svg" alt="Menu"/></li>
      </ul>
      </nav>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
      <button>Awesome!</button>

      </div>
    );
  }
}
