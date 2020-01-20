import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar navbar-light bg-dark">
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
              <h2>You will learn a Frontend <br>
              </br> framework from scratch, to <br>
              </br> becaome an Ninka Developer.
              </h2>
              <button className= 'btn btn-outline-light bg-light' type='submit'>Awesome!</button>
            </div>
          </section>
        </div>
        <div className="Icons">
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;