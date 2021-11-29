
import './App.css';
import Header from './components/comp-header.js'
import Content from './components/comp-content.js'
import Content2 from './components/comp-content2.js'
import logoIronhack from './images/ironhack-logo.svg'
import menuTop from './images/menu-top.svg'
 
import reactLogo from './images/react-logo.svg'


function App() {
  return (
    <div className="App">
     <Header srcLogo={logoIronhack} srcMenuTop={menuTop}/>
     <Content />
     <Content2 />
    </div>
  );
}

export default App;
