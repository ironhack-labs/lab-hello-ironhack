import logo from './logo.svg';
import logo1 from './icon1.png';
import logo2 from './icon2.png';
import logo3 from './icon3.png';
import logo4 from './icon4.png';
import './App.css';
import Header from './Header';
import Button from './Button';
import Card from './Card'

function App() {
  return (
    
    <div className="App">
      <section className="App-header">
      <article className="firstSection">
        <Header titleText="Say hello to react js" subtitleText="You will learn how to use the most popular front end library, and become a super ninja developer." />
        <Button text = 'awesome'/>
      </article>
      </section>

      <section className="secondSection">
        <Card
          image={logo1} 
          name="declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Card
          image={logo2} 
          name="components"
          description="Build encapsulated componentes that manage their state"
        />
        <Card
          image={logo3}  
          name="single-way"
          description="A set of inmutable values are passed to the components"
        />
        <Card
          image={logo4} 
          name="jsx"
          description="Statically-typed, designed to run on modern browsers"
        />
      </section>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

    </div>
      
  );
}

export default App;
