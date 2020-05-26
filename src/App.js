import React, { Component } from "react";
import "./App.css";
import Header from './layout/Header';
import Features from './layout/Features';

class App extends Component {
    state = {
        features: [{
            image: '/images/icon1.png',
            title: 'Declarative',
            description: 'React makes it painless to create interactive UIs'
        },
        {
            image: '/images/icon2.png',
            title: 'Components',
            description: 'Build encapsulated components that manage their state'
        }, {
            image: '/images/icon3.png',
            title: 'Single-Way',
            description: 'a set of immutable values are passed to the component’s'
        }, {
            image: '/images/icon4.png',
            title: 'JSX',
            description: 'statically-typed, designed to run on modern browsers'
        }]
    }
    getStyle = () => {
        return {
            padding: '3vw 5vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            alignItems: 'flex-Start',
            color: 'white'
        }
    }
    render() {
        return (
            <div className="App">
                <div style={this.getStyle()}>
                    <Header />
                    <div>
                        <h1 style={hStyle}> Say hello to <br />ReactJs!</h1>
                        {/* <img style={{ float: "right" }} src="/images/react-logo.svg" alt="" /> */}
                        <p style={pStyle}>You will learn a Frontend<br /> framework from scratch,<br /> to become an Ninka Developer. </p>
                    </div>
                    <button style={btnStyle}>Awesome!</button>
                </div >
                <div style={featuresStyle}>
                    <Features features={this.state.features} />
                </div>

            </div >
        );
    }
}
const btnStyle = {
    display: 'inline-block',
    padding: '20px 10px',
    fontSize: 'medium',
    fontWeight: 'bolder',
    borderRadius: '10%',
    width: "17vw",
    textAlign: 'center',
    fontSize: '2vw'
}
const pStyle = {
    fontSize: '2vw'
}
const hStyle = {
    fontSize: '9vw'
}
const featuresStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '3vw 5vw',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap'
}



export default App;