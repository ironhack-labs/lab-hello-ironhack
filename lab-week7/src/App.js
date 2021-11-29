import logo from './images/ironhack-logo.svg';
import menutop from './images/menu-top.svg';
import './App.css';
import Title from './Title';
import Card from './Card';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-bar">
        <img src={logo} alt="logo" />
        <img src={menutop} alt="menutop" />
      </div>

      <div className="principal">
      <Title size="100px" titleText={<>{"Say Hello to"} <br/> {"ReactJS"} </>} />
      <Title size="30px" titleText={<>{"You will learn how to use"} <br/>  {"the most popular frontend library,"} <br/> {"and became a super Ninja developer"} </>} />
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

      <section className="section">
      <Card src={icon1} text="Declarative" paragrah="React makes it painless to create interactive UIs"/>
      <Card src={icon2} text="Components" paragrah="React makes it painless to create interactive UIs"/>
      <Card src={icon3} text="Single-Way" paragrah="React makes it painless to create interactive UIs"/>
      <Card src={icon4} text="JSX" paragrah="React makes it painless to create interactive UIs"/>
      

      </section>
    </div>
  );
}

export default App;
