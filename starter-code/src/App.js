import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar">
            <a className="navbar-brand"><img src='/images/ironhack-logo.svg'></img></a>
            <form className="form-inline">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><img src='/images/menu-top.svg'></img></button>
            </form>
          </nav>
          <section>
            <div className="section-text">
              <h1>Say hello to<br/>
              ReactJS
              </h1>
              <h6>You will learn a Frontend <br/>
              framework from scratch, to <br/>
              becaome an Ninka Developer.
              </h6> <br/><br/>
              <button className= 'btn btn-outline-light bg-light text-dark btn-lg' type='submit'>Awesome!</button>
            </div>
          </section>
        </div>
        <div class="d-flex justify-content-around content">
          <div>
            <img src="../images/icon1.png"/>
          </div>
          <div>
            <img src="../images/icon2.png"/>
          </div>
          <div>
            <img src="../images/icon3.png"/>
          </div>
          <div>
            <img src="../images/icon4.png"/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;