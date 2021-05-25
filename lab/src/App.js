import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src='react-logo.svg' className="atom1" alt="logo" />
      <img src='react-logo.svg' className="atom2" alt="logo" />
      <img src='react-logo.svg' className="atom3" alt="logo" />
      <img src='react-logo.svg' className="atom4" alt="logo" />
        <div className="Top">
          <img src='ironhack-logo.svg' className="App-logo" alt="logo" />
          <img src='menu-top.svg' className="menutop" alt="logo" />
        </div>
        <h1>
          Say Hello to <br/>ReactJS
        </h1>
        <p>
          You will learn how to use <br/>
          the most popular frontend library, <br/>
          and become a super Ninja developer.
        </p>
        <a
          className="App-link button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a>
      </header>
      <section className="Info">
        <div className="Bullet">
          <img src='icon1.png' alt="logo" />
          <h3>Declarative</h3>
          <p>React makes ir painless to create interactive UIs.</p>
        </div>
        <div className="Bullet">
          <img src='icon2.png' alt="logo" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="Bullet">
          <img src='icon3.png' alt="logo" />
          <h3>Declarative</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="Bullet">
          <img src='icon4.png' alt="logo" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
