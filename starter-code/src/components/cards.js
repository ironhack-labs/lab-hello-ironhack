import React from "react";

const cards = (props) => {
    return (
    <div className="cardsHolder">
      <div className="cards">
          <div className= "card">
              <div><img src="/images/icon1.png"/></div>
              <div><h2 className="cartTitle">Declarative</h2></div>
              <div><p className="cardText">React makes it painless to create interactive UIs</p></div>
          </div>
          <div className= "card">
              <div><img src="/images/icon2.png"/></div>
              <div><h2 className="cardTitle">Components</h2></div>
              <div><p className="cardText">Build encapsulated components that manage their state</p></div>

          </div>
          <div className= "card">
              <div><img src="/images/icon3.png"/></div>
              <div><h2 className="cardTitle">Single-Way</h2></div>
              <div><p className="cardText">A set of immutable values are passed to the component's</p></div>
          </div>
          <div className= "card"> 
              <div><img src="/images/icon4.png"/></div>
              <div><h2 className="cardTitle">JSX</h2></div>
              <div><p className="cardText">Statically-typed, designed to run on modern browsers</p></div>

          </div>
      </div>
    </div>
    );
  };
  export default cards;