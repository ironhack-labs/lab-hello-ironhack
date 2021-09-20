import './App.css';
import Button from "./button"
import Article from "./Article"

function App() {
  return (
    <div className="App">
      <div className="hero">
        <nav>
          <img src='images/ironhack-logo.svg' alt="logo Ironhack" />
          <img src='images/menu-top.svg' alt="navbar" />
        </nav>

        <section class="title">
          <h1>Say hello to<br />ReactJs </h1>
        </section>
        <section>
          <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer</p>
        </section>
        <section>
          <Button title="Awesome!" />
        </section>
      </div>

      <section class="icons">

        <Article img="images/icon1.png" title="Declarative" description="React makes it painless to create nteractive UIs." />
        <Article img="images/icon2.png" title="Components" description="Build encapsulated components that manage their state." />
        <Article img="images/icon3.png" title="Single-Way" description="A set og immutable values are passed to the component´s." />
        <Article img="images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers." />

      </section>
    </div>
  );
}

export default App;
