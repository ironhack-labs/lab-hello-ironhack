import React, { Component } from 'react';
import './App.css';
import './components/ImgReact';
import ImgReact from './components/ImgReact';
import Feature from './components/Feature';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-part">
          <header>
            <img src='/images/ironhack-logo.svg' alt="ironhack logo" />
            <img src='/images/menu-top.svg' alt="menu icon" />
          </header>
          <section>
            <h1>Say hello to<br />ReactJS</h1>
            <p className="main-part-text">You will learn a Frontend<br />framework from scratch, to<br />become a Ninja Developer.</p>
            <div className="awesome">
              Awesome!
            </div>
          </section>
          <ImgReact aClassName={"react-logo-1"}/>
          <ImgReact aClassName={"react-logo-2"}/>
          <ImgReact aClassName={"react-logo-3"}/>
          <ImgReact aClassName={"react-logo-small-1"}/>
          <ImgReact aClassName={"react-logo-small-2"}/>
          <ImgReact aClassName={"react-logo-small-3"}/>
        </div>
        <section className="features">
          <Feature srcImg={"/images/icon1.png"} altImg={'declarative icon'} title={'Declarative'} description={'React makes it painless to create interactive UIs.'}/>
          <Feature srcImg={"/images/icon2.png"} altImg={'components icon'} title={'Components'} description={'Build encapsulated components that manage their state.'}/>
          <Feature srcImg={"/images/icon3.png"} altImg={'single-way icon'} title={'Single-Way'} description={`A set of immutable values are passed to the component's.`}/>
          <Feature srcImg={"/images/icon4.png"} altImg={'jsx icon'} title={'JSX'} description={`Statically-typed, designed to run on modern browsers.`}/>
        </section>
      </div>
    );
  }
}

export default App;
