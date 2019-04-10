import React, {Component} from 'react';
import "./App.css";



class App extends Component{
    render(){
        return(
            <div className="Page">
                <div className='nav'>
                    <div className='container'>
                        <img src='/images/ironhack-logo.svg'/>
                    </div>
                    <div className='container'>
                        <img src='/images/menu-top.svg'/>
                    </div>
                </div>
                <div className='main'>
                    <div className='container flex'>
                        <div className='heading'>
                            <h1>Say hello to ReactJS</h1>
                            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                        </div>
                        <div className='logo-box'>
                        
                        </div>
                    </div>
                    <div className='topics'>
                    <div className='container flex'>
                        <div className='box'>
                            <img src='/images/icon1.png'/>
                            <h3>Declarative</h3>
                            <p>React makes it painless to create interactive UIs.</p>
                        </div>
                        <div className='box'>
                            <img src='/images/icon2.png'/>
                            <h3>Components</h3>
                            <p>Build encapsulated components that manage their state</p>
                        </div>
                        <div className='box'>
                            <img src='/images/icon3.png'/>
                            <h3>Single-Way</h3>
                            <p>A set of immutable values are passed to the component's</p>
                        </div>
                        <div className='box'>
                            <img src='/images/icon4.png'/>
                            <h3>JSX</h3>
                            <p>Statically-typed, designed to run on modern browsers</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;