import React from "react";



const cards = (props) => {
    return (
      <div className="detailCards">
          <div className= "reactCards">
              <div><img src="/images/icon1.png" alt="logo"/></div>
              <div><h2 className="reactcardH">Declarative</h2></div>
              <div className="reacparaDiv"><p className="reactpara">React makes it painless to create interactive UIs</p></div>
          </div>
          <div className= "reactCards">
              <div className="reactcardLogo"><img src="/images/icon2.png" alt="logo"/></div>
              <div><h2 className="reactcardH">Components</h2></div>
              <div><p className="reactpara">Build encapsulated components that manage their state</p></div>

          </div>
          <div className= "reactCards">
              <div><img src="/images/icon3.png" alt="logo" /></div>
              <div><h2 className="reactcardH">Single-Way</h2></div>
              <div><p className="reactpara">A set of immutable values are passed to the component's</p></div>
          </div>
          <div className= "reactCards"> 
              <div><img src="/images/icon4.png" alt="logo"/></div>
              <div><h2 className="reactcardH">JSX</h2></div>
              <div><p className="reactpara">Statically-typed, designed to run on modern browsers</p></div>

          </div>
      </div>
    );
  };
  export default cards;
  