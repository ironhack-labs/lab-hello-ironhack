import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const landingPage = (
  <main>
    <header>
      <section>
        <nav>
          <img src="../images/ironhack-logo.svg" alt="Ironhack Logo"/>
          <img src="../images/menu-top.svg" alt="menue"/>
        </nav>

        <article>
          <h1>Say hello to <br/>ReactJS</h1>
          <p>You will learn a Frontend <br/><s>framework</s> library from scratch, to <br/>become an Nin<s>k</s>ja Developer.</p>
          <button>Awesome!</button>
        </article>

        <div>
          <img className="logo" id="react-logo1" src="../images/react-logo.svg" alt="React Logo"/>
          <img className="logo" id="react-logo2" src="../images/react-logo.svg" alt="React Logo"/>
          <img className="logo" id="react-logo3" src="../images/react-logo.svg" alt="React Logo"/>
          <img className="logo" id="react-logo4" src="../images/react-logo.svg" alt="React Logo"/>
          <img className="logo" id="react-logo5" src="../images/react-logo.svg" alt="React Logo"/>
          <img className="logo" id="react-logo6" src="../images/react-logo.svg" alt="React Logo"/>
        </div>
      </section>
    </header>
    <footer>
      <section>
        <article>
          <div>
            <figure id="ico1"></figure>
            <h2>Declerative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <figure id="ico2"></figure>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <figure id="ico3"></figure>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <figure id="ico4"></figure>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </article>
      </section>
    </footer>
  </main>
);

ReactDOM.render(
  landingPage, 
  document.getElementById('root')
)