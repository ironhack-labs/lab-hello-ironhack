import './App.css';

import Infocards from './Infocards'
import Button from './Button'
import Navbar from './Navbar'
import Title from './Title'
import Subtitle from './Subtitle'

function App() {
  return (
    <div className="App">
      <section className="title-container">
        <Navbar className="navbar-container" />
        <div className="body-container">
          <Title title="Say hello to ReactJS"></Title>
          <Subtitle subtitle="You will learn how to use the most popular frontend library, and become a super Ninja developer."></Subtitle>
        </div>

        <div className="button-container">
          <Button text="Awesome!"></Button>
        </div>
      </section>

      <section className="info-container">
        <Infocards className="info-cards" imgsource="./../icon1.png" infotitle="Declarative" infotext="React makes it painless to create interactive UIs"></Infocards>
        <Infocards className="info-cards" imgsource="./../icon2.png" infotitle="Components" infotext="Build encapsulated components that manage their state."></Infocards>
        <Infocards className="info-cards" imgsource="./../icon3.png" infotitle="Single-Way" infotext="A set of immutable values are passed to the components."></Infocards>
        <Infocards className="info-cards" imgsource="./../icon4.png" infotitle="JSX" infotext="Statically typed. Designed to run on modern browsers."></Infocards>
      </section>
    </div>
  );
}

export default App;
