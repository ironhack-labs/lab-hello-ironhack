import logo from '../src/images/ironhack-logo.svg'
import menu from '../src/images/menu-top.svg'
import img1 from '../src/images/icon1.png'
import img2 from '../src/images/icon2.png'
import img3 from '../src/images/icon3.png'
import img4 from '../src/images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logos-img">
          <img src={logo} className="iron-logo" alt="logo" />
          <img src={menu} className="menu-logo" alt="menu" />
        </div>

        <div className="header-content">
          <h1>Say hello to <br></br>ReactJS</h1>
          <p className="header-description">
            You will learn how to use <br></br> the most popular fronted library,<br></br> and become a super Ninja developer.
          </p>
          <a href="https://www.google.es" className="btn">
            <b>Awesome!</b>
          </a>
        </div>
      </header>
      <div className="section-content">
        <div>
          <img src={img1} className="body-img" alt="cool icon" />
          <h2>Declarative</h2>
          <p>
            React makes it <br></br> painless to create <br></br> interactive UIs
          </p>
        </div>

        <div>
          <img src={img2} className="body-img" alt="cool icon" />
          <h2>Components</h2>
          <p>
            Build encapsulated <br></br> components that <br></br> manage their state.
          </p>
        </div>

        <div>
          <img src={img3} className="body-img" alt="cool icon" />
          <h2>Single-Way</h2>
          <p>
            A set of inmmutable <br></br> values are passed to <br></br> the component's.
          </p>
        </div>

        <div>
          <img src={img4} className="body-img" alt="cool icon" />
          <h2>JSX</h2>
          <p>
            Statically-typed <br></br> desinged to run on<br></br> modern browser.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
