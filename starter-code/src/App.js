import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const displayImg = source => {
      return <img src={source} />
    }

    return (
      <div class="containerColumn">
        <div className="containerColumn bgColor1 container1">
          <div className="containerRow padding1">
            <div className="imgSize1">{displayImg('../images/ironhack-logo.svg')}</div>
            <div className="imgSize1 right">{displayImg('../images/menu-top.svg')}</div>
          </div>
          <h1 className="padding1"> Say hello to <br></br> ReactJs </h1>
          <p className="padding1 padding2 fontSize2 fontColor1">You will learn a Frontend <br></br> framework from scratch, to <br></br> bevome a Ninja Developer.</p>
          <div className="container2 fontSize2 margin1">Awesome!</div>
        </div>
        <div className="containerRow cardMain1">
          <div className="containerColumn cardContainer1">
            <div className="imgSize2">{displayImg('../images/icon1.png')}</div>
              <h3 className="cardMargin1 fontSize1">Declarative</h3>
              <p className="cardMargin1 fontColor1 fontSize2">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="containerColumn cardContainer1">
            <div className="imgSize2">{displayImg('../images/icon2.png')}</div>
              <h3 className="cardMargin1 fontSize1">Components</h3>
              <p className="cardMargin1 fontColor1 fontSize2">Build encapsulated components that maage their state.</p>
          </div>
          <div className="containerColumn cardContainer1">
            <div className="imgSize2">{displayImg('../images/icon3.png')}</div>
              <h3 className="cardMargin1 fontSize1">Single-Way</h3>
              <p className="cardMargin1 fontColor1 fontSize2">A set of immutable values are passed to the components.</p>
          </div>
          <div className="containerColumn cardContainer1">
            <div className="imgSize2">{displayImg('../images/icon4.png')}</div>
              <h3 className="cardMargin1 fontSize1">JSX</h3>
              <p className="cardMargin1 fontColor1 fontSize2">Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
