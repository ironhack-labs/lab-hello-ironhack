import './App.css';
import image from "./ironhack-logo.svg"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import icon4 from "./icon4.png"
import menu from "./menu-top.svg"
import Button from './Button';
import Icon from './Icon';

function App() {
  return (
    <>
      <header>
        <img src={image} className="ironhack-logo" alt="logotipo" />
        <img src={menu} className="menutop-logo" alt="logotipo" />
<article>
        <h1>Say hello to ReactJS</h1>
        <p className="p-white">You will learn how to use the most popular front-end library, and become a super Ninja developer.</p>
          <Button newWindow={true} buttonText="Awesome!" link="https://www.react.com" /></article>
      </header>
      <body>
        <Icon name="Declarative" icon={icon1} text="React makes it painless to create interactive UIs."/>
        <Icon name="Components" icon={icon2} text="Build encapsulated components that manage their state."/>
        <Icon name="Single-way" icon={icon3} text="A set of immutables values are passed to the component's."/>
        <Icon name="JSX" icon={icon4} text="Statically-typed, Designed to run on modern browsers"/>
      </body>
    </>
  )
}

export default App;
