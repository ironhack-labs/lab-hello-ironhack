import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Feature from "./components/Feature";
import Paragraph from "./components/Paragraph";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <section className= "topSection">
        <header className = "navBar">
          <img src = "/images/ironhack-logo.svg" alt = "ironhack logo"></img>
          <img src = "/images/menu-top.svg" alt = "menu top"></img>
        </header>
        <div>
          <img className= "logo1" src = "/images/react-logo.svg" alt = "react logo"></img>
          <img className= "logo2" src = "/images/react-logo.svg" alt = "react logo"></img>
          <img className= "logo3" src = "/images/react-logo.svg" alt = "react logo"></img>
          <section className = "topLeftSection">
            <Title framework="ReactJS" />
            <Paragraph person = "You" />
            <Button message = "Awesome!" />
          </section>
        </div>

      </section>

      <section className= "bottomSection">

        <div><Feature imageUrl = "/images/icon1.png" arrIndex = {0} /></div>
        <div><Feature imageUrl = "/images/icon2.png" arrIndex = {1} /></div>
        <div><Feature imageUrl = "/images/icon3.png" arrIndex = {2} /></div>
        <div><Feature imageUrl = "/images/icon4.png" arrIndex = {3} /></div>

      </section>
    </div>
  );
}

export default App;
