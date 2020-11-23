import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Main from './Main.js'
import Cards from './Cards.js'

function App() {
  return (
    <div>
      <div className='App' style={{backgroundColor: "#1f2535", paddingTop: "30px", paddingRight: "60px", paddingLeft: "60px", paddingBottom: "100px"}}>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <Main/>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
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
