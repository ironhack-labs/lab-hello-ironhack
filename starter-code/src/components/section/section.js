import React from "react";
import "./section.css";

class Section extends React.Component {


  render() {


    return (
      <div id="section" className="Section">
        <div class="col">
          <img class="icon1" src="images/icon1.png" alt="icon1" />
          <h3>Declarative</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore est ratione </p>
        </div>
        <div class="col">
          <img class="icon2" src="images/icon2.png" alt="icon2" />
          <h3>Components</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore est ratione</p>
        </div>
        <div class="col">
          <img class="icon3" src="images/icon3.png" alt="icon3" />
          <h3>Single-Way</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore est ratione</p>
        </div>
        <div class="col">
          <img class="icon4" src="images/icon4.png" alt="icon4" />
          <h3>JSX</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore est ratione</p>
        </div>

      </div>
    );
  }
}

export default Section;