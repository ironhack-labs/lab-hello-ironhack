
import UserCard from './UserCards.js';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';
import './App.css';
import logo1 from './icon1.png';
import logo2 from './icon2.png';
import logo3 from './icon3.png';
import logo4 from './icon4.png';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />

        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library,and become a super Ninja developer.</p>

        <button>Awesome!</button>
      </header>
      <body>

        <UserCard
          image={logo1}
          title="Declarative"
          text="React makes it painless to create interactive UIs."
        />
        <UserCard
          image={logo2}
          title="Components"
          text="Build encapsulated components that manage their state."
        />
        <UserCard
          image={logo3}
          title="Single-Way"
          text="A set of immutable values are passed to the component's"
        />
        <UserCard
          image={logo4}
          title="JSX"
          text="Statically-typed,designed to run on modern browsers."
        />


      </body>


    </div >
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
