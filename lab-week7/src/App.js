import logo from './images/ironhack-logo.svg';
import menutop from './images/menu-top.svg';
import './App.css';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-bar">
        <img src={logo} alt="logo" />
        <img src={menutop} alt="menutop" />
      </div>

      <div className="principal">
      <Title size="100px" titleText="Say Hello to ReactJS" />
      <Title size="30px" titleText="You will learn how to use the most popular frontend library, and became a super Ninja developer" />
     <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Awesome!
        </a> 
        </div>
      </header>
    </div>
  );
}

export default App;
