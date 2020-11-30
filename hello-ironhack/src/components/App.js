import './App.css';
import Nav from './navbar'
import Hero from './hero'
import Cards from './cards';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import bglogo from './react-logo.svg'


function App() {
  return (
    <section>
      <header className="header">
      <Nav />
      <Hero title="Say hello to ReactJs" info="You will learn how to use themost popular frontedn library, and become a super ninja developer" />
        <img className="react" src={bglogo} style={{ position: "absolute", left:"500px", top:"300px" }}/>
        <img className="react" src={bglogo} style={{ position: "absolute", left: "750px", top: "50px" }} />
        <img className="react" src={bglogo} style={{ position: "absolute", left: "650px", top: "600px" }} />
      
      </header>
      <div className="article-list">
      <Cards img={icon1} name="Declarative" description="React makes it painless to create interactive UIs " /> 
      <Cards img={icon2} name="Components" description="Build encapsulated components that manage their state" /> 
      <Cards img={icon3} name="Single-way" description="A set of immutable values are passed to the components" /> 
      <Cards img={icon4} name="JSX" description="Statically-typed designed to run on modern browsers" /> 
      </div>

    </section>
  )
}

export default App;
