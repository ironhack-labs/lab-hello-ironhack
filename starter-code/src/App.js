import React from 'react'

import '../public/styles/styles.css'

class App extends React.Component {

  render(){
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="navbar">
            <img src="../images/ironhack-logo.svg" alt="Ironhack logo" />
            <img src="../images/menu-top.svg" alt="menu pic" />
          </div>
          <div className = "perro">
            <h1>Say hello te ReactJS</h1>
            <p>You will learn a Frontend
              framework from scratch, to
              become a Ninja Developer.
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div className="bottom-container">
          <div className="card-container">
            <img src="../images/icon1.png" alt="Declarative"/>
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div className="card-container">
            <img src="../images/icon2.png" alt="Components"/>
            <h3>Components</h3>
            <p>
              Build encapsulated components that manage their state.
            </p>
          </div>
          <div className="card-container">
            <img src="../images/icon3.png" alt="Single-Way"/>
            <h3>Single-Way</h3>
            <p>
              A set of immutable values are passed to the components.
            </p>
          </div>
          <div className="card-container">
            <img src="../images/icon4.png" alt="JSX"/>
            <h3>JSX</h3>
            <p>
              Statically-typed designed to run on modern browsers.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App