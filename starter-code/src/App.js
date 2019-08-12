import React from 'react';
import logo from './logo.svg';
// import logoiron from '../images/ironhack-logo.svg';
import './App.css';
import Columns from './components/Columns'


function App() {
  return (
    <div className="App">
      <div className="container-fluid App-header">
        <div className ="container">
          <div className="row menu">
            <div className="col-6 text-left">
              <img className="img1" src="../images/ironhack-logo.svg" />
            </div>
            <div className="col-6 text-right">
              <img className="img2" src="../images/menu-top.svg" />
            </div>
          </div>

          <div className="row">
            <div className="col-6 text-left">
              <h1 className="titulo">Say hello to ReactJS</h1>
                <p className="parrafo">
                  You will learn a Frontend Framework from scratch, to become an Ninka Developer.
                </p>
                <div className="caja">
                <a href="#"  className = "enlace">
                  Awesome!
                </a>
                </div>
                
            </div>
            <div className="col-6">
              <img className="img4" src="../images/react-logo.svg" />
              <img className="img3" src="../images/react-logo.svg" />
              <img className="img5" src="../images/react-logo.svg" />
            </div>
          </div>
        </div>
      </div>  
        <div className="container-fluid">
          <section className="section-icon">
            <div className="container-fluid">
            
            <Columns />
            </div> 
          </section>
        </div>
    </div>
    
    
  );
}

export default App;
