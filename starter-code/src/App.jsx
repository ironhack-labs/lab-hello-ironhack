import React, { Component } from 'react'
import './App.css';
import Navigation from "./Components/Navigation"
import SecondHeader from "./Components/SecondHeader"
import BigHeader from "./Components/BigHeader"
import Button from "./Components/Button"
import Collection from "./Components/Collection"


export class App extends Component {
    render() {
        return (
            <div>
                <div className ="rootClass">
                    <Navigation/>
                    <div  className="bodyClass">
                        <BigHeader/>
                        <SecondHeader/>
                        <Button/>
                    </div>
                </div>
                <Collection/>
            </div>
        )
    }
}

export default App
