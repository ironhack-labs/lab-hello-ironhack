import React, {Component} from 'react';
import declarative from '../public/images/icon1.png';
import components from '../public/images/icon2.png';
import singleWay from '../public/images/icon3.png';
import jsx from '../public/images/icon4.png';

class Cards extends Component {
  render() {
    return (
      <section className="cards">
        <article className="cards-wrapper">
          <div className="card">
            <img src={declarative} alt="Declarative"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UI's.</p>
          </div>
          <div className="card">
            <img src={components} alt="Components"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="card">
            <img src={singleWay} alt="Single-way"/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="card">
            <img src={jsx} alt="JSX"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </article>
      </section>
    );
  };
}

export default Cards;