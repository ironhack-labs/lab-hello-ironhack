import React, { Component } from "react";
import "./App.css";


class App extends Component {
    render() {
        const ironhackLogo = "/images/ironhack-logo.svg"
        const icon1 = "/images/icon1.png"
        const icon2 = "/images/icon2.png"
        const icon3 = "/images/icon3.png"
        const greetingText = <h1>Say Hello to ReactJS which is not reactive on windows localhost pffffff</h1>
        const ninka = <h4>you will learn react and become a ninka</h4>
        const stupidButton = <button type="button" id="awesome">awesome</button>
        const declarative = <h2>Declatarative</h2>
        const icon1Text = <h3>react makes it painless to create stuff</h3>
        const components = <h2>components</h2>
        const icon2Text = <h3>build encapsulated components</h3>
        const singleWay = <h2>single-way</h2>
        const icon3Text = <h3>a SET OF IMMUTABLE VALUES</h3>
        return (
            <div className="App">

                <img width="100" height="100" src={ironhackLogo}></img>
                {greetingText}
                {ninka}
                {stupidButton}
                <div className="row">
                    <div className="column"></div>
                    {declarative}
                    <br></br>
                    {icon1Text}
                    <br></br>
                    <img src={icon1}></img>
                    <div className="column"></div>
                    {components}
                    <br></br>
                    {icon2Text}
                    <br></br>
                    <img src={icon2}></img>
                    <div className="column"></div>
                    {singleWay}
                    <br></br>
                    {icon3Text}
                    <br></br>
                    <img src={icon3}></img>
                    <div className="column"></div>
                </div>

            </div>
        );
    }
}

export default App;