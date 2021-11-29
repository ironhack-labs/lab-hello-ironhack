import logo from "./images/ironhack-logo.svg";
import navImg from "./images/menu-top.svg";
import declarative from "./images/icon1.png";
import component from "./images/icon2.png";
import singleWay from "./images/icon3.png";
import jsx from "./images/icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={navImg} className="nav-img" alt="nav" />
      </header>

      <section className="section1">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular fronted library, and become a super Ninja developer</p>
        <a href="http://localhost:3000" className="button-awesome">
          Awesome
        </a>
      </section>

      <section className="section2">
        <div>
          <img src={declarative} className="App-logo" alt="logo" />
          <h3>Declarative</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis aspernatur praesentium? Veniam
            placeat quam necessitatibus provident quidem unde, iure animi iste inventore est doloribus aut ea
            perferendis atque quod.
          </p>
        </div>
        <div>
          <img src={component} className="App-logo" alt="logo" />
          <h3>Component</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis aspernatur praesentium? Veniam
            placeat quam necessitatibus provident quidem unde, iure animi iste inventore est doloribus aut ea
            perferendis atque quod.
          </p>
        </div>
        <div>
          <img src={singleWay} className="App-logo" alt="logo" />
          <h3>Single-Way</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis aspernatur praesentium? Veniam
            placeat quam necessitatibus provident quidem unde, iure animi iste inventore est doloribus aut ea
            perferendis atque quod.
          </p>
        </div>
        <div>
          <img src={jsx} className="App-logo" alt="logo" />
          <h3>JSX</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis aspernatur praesentium? Veniam
            placeat quam necessitatibus provident quidem unde, iure animi iste inventore est doloribus aut ea
            perferendis atque quod.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
