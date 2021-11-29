import './App.css';
import Title from './Title';
import Button from './Button';
import Card from './Card';
import Logo from './Logo';
import Menu from './Menu';
import card1 from './images/icon1.png';
import card2 from './images/icon2.png';
import card3 from './images/icon3.png';
import card4 from './images/icon4.png';
import logo from './images/ironhack-logo.svg';
import burger from './images/menu-top.svg'

function App() {
  return (
    <div className="App">

      <div className="main">
        <div className="navBar">
          <Logo href="#" src={logo} />
          <Menu href="#" src={burger} />
        </div>

        <div className="header">
        <Title titleText="Say Hello to ReactJS" />
        <Title paragraphText="You will learn how to use the most popular frontend library, and become a super Ninja developer" />
        </div>

        <Button href="#" text="Awesome!" target="_self" />
      </div>

      <div className="cards">
        <Card cardTitle="Declarative" src={card1} cardParagraph="React makes it painless to create interactive UIs." />
        <Card cardTitle="Components" src={card2} cardParagraph="Build encapsulated components that manage their state." />
        <Card cardTitle="Single-Way" src={card3} cardParagraph="A set of inmutable values are passed to the component's." />
        <Card cardTitle="JSX" src={card4} cardParagraph="Statically-typed, designed to run on modern browsers." />
      </div>
    </div>
  )
}

export default App;
