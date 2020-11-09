import React, { Component } from "react";
import Main from "./Main.js";
import Card from "./Card.js";
import "./App.css";

class App extends Component {
    render() {
        let cardsArr = [{ title: 'Declarative', p: 'React makes it painless to create interactive UIs.', imgPath: '/images/icon1.png' },
        { title: 'Components', p: 'Build encapsulated components that manage their state.', imgPath: '/images/icon2.png' },
        { title: 'Single-Way', p: "A set of immutable values are passed to the component's.", imgPath: '/images/icon3.png' },
        { title: 'JSX', p: 'Statically-typed, designed to run on modern browsers', imgPath: '/images/icon4.png' }
        ]
        return (
            <div className="App">
                <Main className='Main' />
                <div className='cards-wrapper'>
                    {cardsArr.map(card => {
                        const { title, p, imgPath } = card;
                        return <Card title={title} p={p} imgPath={imgPath} />
                    })}
                </div>
            </div>
        );
    }
}



export default App; 