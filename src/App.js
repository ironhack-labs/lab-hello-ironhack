import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/ui/header/Header'
import Main from './components/ui/main/Main'
import Button from './components/ui/button/Button'
import Footer from './components/ui/footer/Footer'

const App = () => {
  return (

    <div>
      <div className="App">
        <Header />
        <Main />
        <Button text="Awsome!"/>
      </div>
      <div>
        <Footer />
      </div>
     
    </div>


  )
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
