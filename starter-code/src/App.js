import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import SplashScreen from './SplashScreen';
import Features from './Features';

class App extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <SplashScreen />
                <Features />
            </div>
        );
    }
}

export default App;