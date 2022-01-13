import './App.css';

function App() {
  return (
    <div className="App">
      <div className="darkApp">
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image1 imageAbs"
        />
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image2 imageAbs"
        />
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image3 imageAbs"
        />
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image4 imageAbs"
        />
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image5 imageAbs"
        />
        <img
          src="/images/react-logo.svg"
          alt="logo"
          className="image6 imageAbs"
        />
        <nav className="navbar">
          <img src="/images/ironhack-logo.svg" alt="logo" />
          <img src="/images/menu-top.svg" alt="logo" />
        </nav>
        <h1 className="title">
          Say hello to
          <br /> ReactJS
        </h1>
        <p className="paragraph">
          You will learn how to use <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button type="button" className="awesomeButton">
          Awesome!
        </button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="/images/icon1.png" alt="declarative" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src="/images/icon2.png" alt="declarative" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img src="/images/icon3.png" alt="declarative" />
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="card">
          <img src="/images/icon4.png" alt="declarative" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
