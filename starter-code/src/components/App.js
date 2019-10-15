import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import MiddleApp from './MiddleApp.js';

//fisrt way to make component
class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header></Header>
                </div>
                <div>
                    <MiddleApp/>
                </div>
            </div>

        );
    }
}

export default App;

