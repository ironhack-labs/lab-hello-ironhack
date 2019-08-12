import React, { Component } from 'react';
import './App.css';
//import icon1 from "../images/icon1.png"
/* --- Custom components --- */
import Header from './components/Header'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <main>


        <Header
          title="Say hello to my little friend!"
          subtitle="Are you talking to me?"
          
          />
      


      
        <div className="container">
          <Card />            
        </div>

      </main>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
