import './App.css';
// import Title from './Title'
import Button from './Button'
import Card from './Card';
import logo from './images/ironhack-logo.svg'
import navicon from './images/menu-top.svg'
import icon1 from './images/icon1.png'
import icon2 from './images/icon1.png'
import icon3 from './images/icon1.png'
import icon4 from './images/icon1.png'
import Navbar from './navbar'
import bigBody from './bigBody'



function App() {
  return (
    <div className="App">

      <div className="navbar">
        <img style={{width: "50px"}} src={logo} alt="Ironhack Logo" />
        
        <img style={{width: "50px"}} src={navicon} alt="navicon" />

      </div>

      <div className="bigBody"> 
      
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <Button href="#" text="Awesome!" />
      
      </div>

      <div className="cardBody">
        <Card name="Declarative" src={icon1} />
        <Card name="Components" src={icon2}  />
        <Card success name="Single-Way" src={icon3}  />
        <Card danger name="JSX" src={icon4} />
      </div>

      
    </div>
  );
}

export default App;
