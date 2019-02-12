import React, { Component } from "react";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
      <section>
          <div className="container">
            <img src={"../images/ironhack-logo.svg"} className="ironhack-logo" alt="" />
            <img src={"../images/menu-top.svg"} className="menu-top" alt=""/>
            <div className="textHeader">
                <h1 style={{ color: 'white' }}> Say hello to</h1>
                <h1 style={{ color: 'white' }}> ReactJS</h1>
            </div>
            <p className="paragraph" style={{ color: '#9FA2A8'}}>You will learn a Frontend framework from scratch to become a Ninka Developer</p>
            <button className='button' color="white">Awesome!</button>
            <img src={"../images/react-logo.svg"} className="react-logo" alt=""></img>
          </div>
      </section>
      <div className="images" style={{display: 'flex', justifyContent: 'space-between'}}>
        <img src={"../images/icon1.png"} className="icon1" alt="" />
        <img src={"../images/icon2.png"} className="icon2" alt="" />
        <img src={"../images/icon3.png"} className="icon3" alt="" />
        <img src={"../images/icon4.png"} className="icon4" alt="" />
        </div>
      </div>
    );
  }
}

export default App;