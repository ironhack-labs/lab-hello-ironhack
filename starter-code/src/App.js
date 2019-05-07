import React, { Component } from 'react';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const cards = [
      {
        img: './images/icon1.png',
        title: 'Declarative',
        subTitle: 'React makes it painless to create interactive UIs.',
      },
      {
        img: './images/icon2.png',
        title: 'Components',
        subTitle: 'Build encapsulated components that manage their state.',
      },
      {
        img: './images/icon3.png',
        title: 'Single-Way',
        subTitle: 'A set of immutable values are passed to the components\'s.',
      },
      {
        img: './images/icon4.png',
        title: 'JSX',
        subTitle: 'Statically-typed, designed to run on modern browsers.',
      },
    ];
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <div className="superCard">
          <div className="navBar">
            <img src="./images/ironhack-logo.svg" />
            <img src="./images/menu-top.svg" />
          </div>
          <div className="hero">
            <div className="imgLogo">
              <img className="firstLogo" src="./images/react-logo.svg" />
              <img className="secondLogo" src="./images/react-logo.svg" />
              <img className="thirdLogo" src="./images/react-logo.svg" />
            </div>
            <h1> Say Hello to<br/>ReactJS! </h1>
            <h2>You learn a FrontEnd<br/> framework from scratch, to<br/> became an Ninka Developer</h2>
            <button className="bnt" href="#">Awesome</button>
          </div>
        </div>
        <div className="cards">
          <div className="card0">
            <img src={cards[0].img} />
            <h2>
              {cards[0].title}
            </h2>
            <p>
              {cards[0].subTitle}
            </p>
          </div>
          <div className="card1">
            <img src={cards[1].img} />
            <h2>
              {cards[1].title}
            </h2>
            <p>
              {cards[1].subTitle}
            </p>
          </div>
          <div className="card2">
            <img src={cards[2].img} />
          <h2>
          {cards[2].title}
          </h2>
            <p>
              {cards[2].subTitle}
            </p>
          </div>
          <div className="card3">
            <img src={cards[3].img} />
            <h2>
              {cards[3].title}
            </h2>
            <p>
              {cards[3].subTitle}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



          // <img src="./images/react-logo.svg" />
          // <img src="./images/react-logo.svg" />
          // <img src="./images/react-logo.svg" />