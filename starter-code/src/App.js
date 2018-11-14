import React, {Component} from 'react';
import './App.css';
import First from './First';
import Second from './Second';

class App extends Component {
    render() {
        return (
            <div className="App">
                <First/>
                <Second/>
            </div>
        );
    }
}

export default App;