
import './App.css';


function App() {
  return (
    <div className="App">
      <div className= "blue">

        <div className="App-header">
           <img src="images/ironhack-logo.svg" alt="ironhack-logo"/>
           <img src="images/menu-top.svg" alt="menu-top"/>
        </div>

        <div className="sayHello">
           <h1> Say hello to <br/>
              ReactJS</h1>
            <p>You will learn how to use <br/>
               the most popular frontend library, <br/>
               and become a super Ninja developer</p>
               <br/>
               <br/>
            <button>Awesome!</button>
        </div>
      </div>

      <div className="icons">
        <div className="container-icon">
           <img src="images/icon1.png" alt="icon1"/>
           <h2>Declarative</h2>
           <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="container-icon">
           <img src="images/icon2.png" alt="icon1"/>
           <h2>Components</h2>
           <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="container-icon">
           <img src="images/icon3.png" alt="icon1"/>
           <h2>Single-way</h2>
           <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="container-icon">
           <img src="images/icon4.png" alt="icon1"/>
           <h2>JSX</h2>
           <p>Statically-typed,designed to run on modern browsers.</p>
        </div>
     
      </div>
    </div>
  );
}

export default App;
