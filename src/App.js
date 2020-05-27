import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        // const header = () => {
        //     return (
        //         <div className="Header">
        //             <img src='/public/images/ironhack-logo.svg' id="logo"/>
        //             <img src='/public/images/menu-top.svg' id="menu"/>
        //         </div>
        //     );
        // };

        // const article = () => {
        //     return (
        //         <div className="Article">
        //             <h1>Say hello to ReactJS</h1>
        //             <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        //             <a src="#">Awesome!</a>
        //         </div>
        //     );
        // };

        return (
            <div className='App'>
                {/* {header()}
                {article()} */}
                <div className="Header">
                    <img src='/public/images/ironhack-logo.svg' id="logo"/>
                    <img src='/public/images/menu-top.svg' id="menu"/>
                </div>
                <div className="Article">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
                    <a src="#">Awesome!</a>
                </div>
            </div>
        );
    }
}

export default App;