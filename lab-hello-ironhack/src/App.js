import './App.css';
import logo from './logo512.png';
import './components/navbar'
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      
      <header>
        
        <Navbar />

        <h1>Say hello to React JS</h1>
        
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        
        <button>Awesome!</button>

      </header>

      <Footer />
      

    </div>

  );
}

export default App;
