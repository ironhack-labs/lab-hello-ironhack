
import icon1 from './article/icon1.png';
import icon2 from './article/icon2.png';
import icon3 from './article/icon3.png';
import icon4 from './article/icon4.png';
import Navbar from './navbar/Navbar.js';
import Article from './article/Article.js';
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      <main>
        <section className="hero">
          <div className="container">
            <div class="row">
              <div class="col-md-5">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button className="btn btn-white mt-5">Awesome!</button>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div class="row">
              <div class="col-md-3">
                <Article avatar={icon1} title="Declarative" paragraph="React makes it painless to create interactive UIs." />
              </div>
              <div class="col-md-3">
                <Article avatar={icon2} title="Components" paragraph="Build encapsulated components that manage their state." />
              </div>
              <div class="col-md-3">
                <Article avatar={icon3} title="Single-Way" paragraph="A set of immutable values are passed to the component's." />
              </div>
              <div class="col-md-3">
                <Article avatar={icon4} title="JSX" paragraph="Statically-typed, designed to run on modern browsers." />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
