import React from 'react';

const AboutReact = () => {
  return <div className="about-react">
      <div className="card-about-react">
        <img src="/images/icon1.png"/>
        <h2>Declarative</h2>
        <p>React makes it pailess to create interective UIs</p>
      </div>
      <div className="card-about-react">
        <img src="/images/icon2.png"/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="card-about-react">
        <img src="/images/icon3.png"/>
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="card-about-react">
        <img src="/images/icon4.png"/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
  </div>;
};

export default AboutReact;
