import React from "react";
import "./App.css";
class App extends React.Component {
  render() {
    return (<div>
                <div className="intro"> 
                    <nav className='nav'>
                        <img src="/images/ironhack-logo.svg" />
                        <img src="/images/menu-top.svg" />
                    </nav>
                    <div className="">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                        <button className="btn">Awesome!</button>
                    </div>
                </div>
                <div>
                    <div className=""></div>
                </div>
            </div>
    )}
}

export default App;
