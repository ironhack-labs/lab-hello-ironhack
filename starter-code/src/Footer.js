import React from "react";

function ArticleLeft() {
  return (
    <div className="bottomContainer">
      <div className="boxy">
        <img className="iconsBottom" src="images/icon1.png" />
        <h2 className="titleBottom">Declarative</h2>
        <p className="textBottom">
          React makes it painless to create interactive UIs.
        </p>
      </div>
      <div className="boxy">
        <img className="iconsBottom" src="images/icon2.png" />
        <h2 className="titleBottom">Components</h2>
        <p className="textBottom">
          Build encapsulated components that maange their state.
        </p>
      </div>
      <div className="boxy">
        <img className="iconsBottom" src="images/icon3.png" />
        <h2 className="titleBottom">Single-Way</h2>
        <p className="textBottom">
          A set of immutable values are passed to the component.
        </p>
      </div>
      <div className="boxy">
        <img className="iconsBottom" src="images/icon4.png" />
        <h2 className="titleBottom">JSX</h2>
        <p className="textBottom">
          Statically-types, designed to run on modern browsers.
        </p>
      </div>
    </div>
  );
}

export default ArticleLeft;
