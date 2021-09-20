import ironhack from './images/ironhack-logo.svg'
import menu from './images/menu-top.svg'
import image1 from './images/icon1.png'
import image2 from './images/icon2.png'
import image3 from './images/icon3.png'
import image4 from './images/icon4.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="head">

        <div className="navbar">
          <img src={ironhack} alt="ironHack-Logo" />
          <img src={menu} alt="menu" />
        </div>
        <div>
          <h1 className="title">Say hello to <br /> ReactJS</h1>
        </div>
        <p className="description">You will learn how to use <br /> the most popular frontend library, <br /> and become a super ninja developer</p>
        <br />
        <br />

        <button type="button" className="btn btn-light btn-lg">Awesome!</button>
      </div>
      <div className="row components">

        <div className="col">
          <img src={image1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="col">
          <img src={image2} alt="" />
          <h3>Component</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="col">
          <img src={image3} alt="" />
          <h3>Sigle-Way</h3>
          <p>A set immutable values are passed to the component's</p>
        </div>
        <div className="col">
          <img src={image4} alt="" />
          <h3>JSX</h3>
          <p>Statically-typed, design to run on modern browsers</p>

        </div>

      </div>
    </div>
  )
}

export default App;
