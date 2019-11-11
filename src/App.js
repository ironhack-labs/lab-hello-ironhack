import React from 'react';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import backgroundImg from './images/react-logo.svg';
import ironhackLogo from './images/ironhack-logo.svg';
import menuImg from './images/menu-top.svg';
import './App.css';
import './index.css';

class App extends React.Component {
  render(){

    return (
      <div className="App">
      <nav>
      <img src={ironhackLogo} alt="Ironhack Logo" />
      <img src={menuImg} alt="Menu Bad" />
      </nav>
      <header>
      <div className="App-header">
        
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a frontend framework from scratch, to become a Ninka Developer.
        </p>
        <button>Awesome!</button>

      </div>
      <div className="backgroundImg">
      <img src={backgroundImg} alt="React-img" />
      </div>
      </header>
      <div className="main">
        <div>
        <img src={icon1} alt="Declarative" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interative UIs.</p>
        </div>
        <div>
        <img src={icon2} alt="Components" />
        <h4>Components</h4>
        <p>Build encapulating components that manage their state.</p>
        </div>
        <div>
        <img src={icon3}  alt="Single-Way"  />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passes to the component's.</p>
        </div>
        <div>
        <img src={icon4}  alt="JS" />
        <h4>JS</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}
}

export default App;
