import logo from './logo.svg';
import './App.css';
import image from './foto.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={image} style={{width: '500px'
        }}/>
        
      </header>
    </div>
  );
}

export default App;
