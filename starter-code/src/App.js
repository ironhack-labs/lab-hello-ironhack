import React, { Component } from 'react';

// NAVBAR
import Navbar from './components/NavBar/Navbar.jsx';
import './components/NavBar/Navbar.css';

// CallToAction
import CallToAction from './components/CallToAction/CallToAction.jsx';
import './components/CallToAction/CallToAction.css';

// Advantages
import Advantages from './components/Advantages/Advantages.jsx';
import './components/Advantages/Advantages.css';

import './index.css';



class App extends Component {
    render() {
      return (
        <div>
            <div>
                <Navbar/>
                <CallToAction/>  
            </div>
            
        <div>
            <Advantages/>
        </div>

        </div>

        
      );
    }
  }

export default App;

