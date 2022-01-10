import logo from "./images/ironhack-logo.svg";
import burger from "./images/menu-top.svg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundimage: "url(images/react-logo.svg)" }}
      >
        <nav>
          <img src={logo} />
          <img src={burger} />
        </nav>
        <section>
          <h1>
            Say hello to <br></br>ReactJS
          </h1>
          <p>
            You will learn how to use<br></br>
            the most popular frontend library,<br></br>
            and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </section>
      </header>
      <section className="App-icons">
        <div className="card">
          <img src={icon1}></img>
          <h2>Declarative</h2>
          <p>
            React makes it<br></br>
            painless to create<br></br>
            interactive UIs.
          </p>
        </div>
        <div className="card">
          <img src={icon2}></img>
          <h2>Components</h2>
          <p>
            Build encapsulated<br></br>
            components that<br></br>
            manage their state.
          </p>
        </div>
        <div className="card">
          <img src={icon3}></img>
          <h2>Single-Way</h2>
          <p>
            A set of immutable<br></br>
            values are passed to<br></br>
            the components's
          </p>
        </div>
        <div className="card">
          <img src={icon4}></img>
          <h2>JSX</h2>
          <p>
            Statically-typed<br></br>
            designed to run on<br></br>
            modern browsers
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
