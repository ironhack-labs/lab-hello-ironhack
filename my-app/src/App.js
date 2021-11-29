
import './App.css';
import Button from './button'
import Card from './card';
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"
import icon4 from "./img/icon4.png"
import Title from './title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title titleText="Say hello to ReactJS"/>
       
       <Title titleText="You will learn how to use the most popular frondend library, and become a super Ninja developer."/>
       
        <Button href="https://www.google.es" text="Awesome!" target="_blank" />
        
        
      </header>
        <div>

          <div className="chapu">
            <Card name="Declarative" src={icon1} />
            <Card name="Components" src={icon2} />
            <Card name="Single Way" src={icon3} />
            <Card name="JSX" src={icon4} />
          </div>
          
        </div>
    </div>
  );
}

export default App;
