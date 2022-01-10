import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo.svg';
import menuTop from './images/menu-top.svg';
import reactLogo from './images/react-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={ironhackLogo}></img>
          <img src={menuTop}></img>
        </nav>
        <section>
          <h1>Say hello to ReactJS</h1>
          <p>You will leanr how to use the most popular
          frontend library, and become a super Nina developer.</p>
          <button>Awesome</button>
        </section>
      </header>
    </div>
  );
}

export default App;
