import React from 'react';

import TopHalf from './TopHalf';
import BottomHalf from './BottomHalf';

import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopHalf />

                <BottomHalf />

            </div>

        )
    }
}

export default App;

// export the component