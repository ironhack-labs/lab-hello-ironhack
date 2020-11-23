import logo from './logo.svg';
import './App.css';

function App() {
  return ( <div>
   <div className="block">
  <div className="menu"> 
  <img src="../ironhack-logo.svg"></img>
  <img src="../menu-top.svg"></img> 
  </div>
  <div>
    <h1>Say Hello to <br></br> ReactJS </h1>
    <h2> You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer. </h2>
    <button className="button"> Awesome!</button>
    </div>

  </div>
  <div id="columns">
  <div className="column">
  <img className="imgs"  src="../icon1.png"></img> 
  <h3> Declarative</h3>
  <h4> React makes it <br></br> painless to create <br></br> interactive Us</h4>
  </div>

  <div className="column">
  <img className="imgs"  src="../icon2.png"></img> 
  <h3> Components</h3>
  <h4> Being encapsulated <br></br> component that <br></br>manages their state </h4>
  </div>

  <div className="column">
  <img className="imgs" src="../icon3.png"></img> 
  <h3> Single-Way</h3>
  <h4> A set of immutable <br></br> values are passed to <br></br>the component's </h4>
  </div>

  <div className="column">
  <img className="imgs" src="../icon4.png"></img> 
  <h3> JSX</h3>
  <h4> Statically-typed,<br></br> designed to run on <br></br> modern browsers</h4>
  </div>

  </div>
  </div>
  );
}

export default App;
