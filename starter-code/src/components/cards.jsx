import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div className='cards'>
        <div className="card-container">
            <img src="images/icon1.png" alt=""/>
              <h2>Declaritive</h2>
              <p>React makes it painless to creat UIs</p>
        </div>
        <div className="card-container">
            <img src="images/icon1.png" alt=""/>
              <h2>Declaritive</h2>
              <p>React makes it painless to creat UIs</p>
        </div>
        <div className="card-container">
            <img src="images/icon1.png" alt=""/>
              <h2>Declaritive</h2>
              <p>React makes it painless to creat UIs</p>
        </div>
        <div className="card-container">
            <img src="images/icon1.png" alt=""/>
              <h2>Declaritive</h2>
              <p>React makes it painless to creat UIs</p>
        </div>
      </div>
    );
  }
}

export default Cards;
