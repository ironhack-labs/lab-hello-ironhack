import React, { Component } from "react";
import icons from "./icons.json";

class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: icons
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.icon.map(elem => {
          return (
            <section>
              <img src={elem.image} />
              <h2>{elem.title}</h2>
              <p>{elem.text}</p>
            </section>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Icons;
