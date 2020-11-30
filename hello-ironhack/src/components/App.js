import logo from './ironhack-logo.svg'
import menu from './menu-top.svg'

//Images Footer
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'


import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={menu} className="App-menu" alt="menu" />
        </div>
        <div className="info-container"> 
          <h1>Say hello to <br />
        ReactJS</h1>
        <p>
            You will learn how to use <br />
            the most popular frontend librarry, <br />
            and become a super Ninja developer.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Awesome!
        </a>
          </div>
      </header>
      <footer className="icons">
        <div>
          <img src={icon1} className="icon-image" alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
       <div>
          <img src={icon2} className="icon-image" alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated<br />
            components that <br />
            manage their state.
          </p>
        </div>
      <div>
          <img src={icon3} className="icon-image" alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable <br />
            values are passed to <br />
            the components.
          </p>
        </div>
      <div>
          <img src={icon4} className="icon-image" alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, <br />
            designed to run on <br />
            modern browsers.
          </p>
          </div>
</footer>
    </div>
  );
}

export default App;
