import React from "react";
import "./Panel.css";

class Panel extends React.Component {
  render() {
    return (
      <div className='panel'>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework to become a Ninja Developer</p>
        <button>Awesome!</button>
      </div>
    );
  }
}

export default Panel;
