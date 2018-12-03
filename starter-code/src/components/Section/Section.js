import React from "react";
import "./Section.css";

class Section extends React.Component {
  render() {
    return (
      <div className="Section">
        <h1> Say Hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <button>Awesome!</button>
      </div>
    );
  }
}

export default Section;