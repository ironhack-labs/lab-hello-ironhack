import React from "react";
import './Main.css';
import NavBar from './NavBar';
import Content from './Content';
import Features from './Features';

class App extends React.Component {
    render() {
        return (
            <div>
            <div className="header">
                < NavBar />
                < Content />
            </div>
                < Features />
            </div>

        )
    }
}

export default App;












