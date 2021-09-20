import logo from './logo.svg';
import './App.css';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ironLogo from './images/ironhack-logo.svg'
import menuTop from './images/menu-top.svg'

function App() {
  return (
    <div className="App">
      <div className="App-div">
        <div className= 'head'>
          <img src={ironLogo} alt = 'ironhack-logo'></img>
          <img src={menuTop} alt = 'menu-top-logo'></img>
        </div>
        <div className='title'>
          <h1> Say hello to ReactJS</h1>
          <article className='description-title'> You will learn how to use the most popular frontend library, and become a super ninja developer</article>
          <button> Awesome! </button>
        </div>
      </div>

      <section className= 'row'>

        <article className='item'>
        <img className='icon' src={icon1} alt='icon-1'></img>
          <h3> Declarative
          </h3>
          <p> React makes it painless interactive UIs</p>
        </article>

        <article>
        <img className='icon' src={icon2} alt='icon-2'></img>
          <h3> Components
          </h3>
          <p> Build encapsulated components that manage their states</p>
        </article>
        
        <article>
        <img className='icon' src={icon3} alt='icon-3'></img>
          <h3> Single-way
          </h3>
          <p> A set of inmutable value are passed to the components</p>
        </article>

        <article>
        <img className='icon' src={icon4} alt='jsx'></img>
          <h3> JSX
          </h3>
          <p> Statically typed designed to run on modern browsers</p>
        </article>

      </section>
    </div>
  );
}

export default App;
