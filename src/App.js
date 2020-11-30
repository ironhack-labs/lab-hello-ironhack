import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="header">
          <div className="left">
            <img className="logoIron" src="/images/ironhack-logo.svg"></img>
            <h1>Say hello to<br></br> ReactJS</h1>
            <div className="flexdiv"><p>You will learn how to use  the most popular frontend library and become a super Ninja developer.</p>
            </div>
            <button className="btn">Awesome!</button>
          </div>
          <div className="right">

            <img className="logo logo1" src="/images/react-logo.svg"></img>
            <img className="logo logo2" src="/images/react-logo.svg"></img>
            <img className="logo logo3" src="/images/react-logo.svg"></img>

          </div>            <img className="menu" src="/images/menu.png"></img>

        </section>
        <section className="body">
          <div>
            <img src="/images/icon1.png"></img>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div>
            <img src="/images/icon2.png"></img>
            <h4>Components </h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
            <img src="/images/icon3.png"></img>
            <h4>Single-Way</h4>
            <p>A set of inmutable values are passed to the component's</p>
          </div>
          <div>
            <img src="/images/icon4.png"></img>
            <h4>JSX</h4>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
