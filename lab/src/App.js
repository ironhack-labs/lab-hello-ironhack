import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import ironlogo from './images/ironhack-logo.svg'
import menutop from './images/menu-top.svg'
import reactlogo from './images/react-logo.svg'

import './App.css';
import Item from './Item'


function App() {
  return (
    <div className="App">
      <div id="top">
        <nav>
          <img src={ironlogo} alt="logo"></img><img src={menutop} alt="logo"></img>
          </nav>
        <div id="title">
          <div id="intro">
            <h1>Say hello to ReactJs</h1>
            <p>You will learn how to use the most popular front-end library, and become a super ninja developer.</p>
            <button>Awesome</button></div> 

            <img src={reactlogo} alt="react logo"></img>
        </div>
        
        
      </div>
      <div id="bottom">

          <Item icon={icon1}  title="Declarative" text="React makes it painless to create interactive UIs."/>
           
        
        <div className="bottom-item">
          <img src={icon2} alt='components'></img>
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="bottom-item">
          <img src={icon3} alt='single-way'></img>
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="bottom-item">
          <img src={icon4} alt='JSX'></img>
          <h4>JSX</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
      </div>
    
   


  );
}

export default App;
