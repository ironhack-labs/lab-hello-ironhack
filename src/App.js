import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {

        const cards = [
            {
                imgUrl: './images/icon1.png',
                title: 'Declarative',
                text: 'React makes it painless to create interactive UIs.'
            },
            {
                imgUrl: './images/icon2.png',
                title: 'Components',
                text: 'Build encapsulated components that manage their state.'
            },
            {
                imgUrl: './images/icon3.png',
                title: 'Single-Way',
                text: "A set of immutable values are passed to the component's."
            },
            {
                imgUrl: './images/icon4.png',
                title: 'JSX',
                text: 'Statically-typed, designed to run on modern browsers.'
            }
        ]

        const displayImg = (card) => {
            return <img src={card.imgUrl} />
        }

        return (
            <div class="main-container">
                <section class="top-container">
                    {/* <img class='react-logo' src='./images/react-logo.svg' /> */}
                    <header class="header">
                        <img src='./images/ironhack-logo.svg' />
                        <img src='./images/menu-top.svg' />
                    </header>
                    <section class="intro">
                        <div>
                            <h1>Say hello to ReactJS</h1>
                            <p>You will learn a Frontend framework
                            from scratch, to become a Ninja Developer.</p>
                            <button>Awesome!</button>
                        </div>
                        <div class="react-logos">
                            <img id="react-1" src='./images/react-logo.svg' />
                            <img id="react-2" src='./images/react-logo.svg' />
                            <img id="react-3" src='./images/react-logo.svg' />
                            <img id="react-4" src='./images/react-logo.svg' />
                            <img id="react-5" src='./images/react-logo.svg' />
                            <img id="react-6" src='./images/react-logo.svg' />
                        </div>
                        
                    </section>
                </section>
                <section class="cards-container">
                    {cards.map(card => {
                        return (
                            <div class='card'>
                                {displayImg(card)}
                                <h2>{card.title}</h2>
                                <p>{card.text}</p>
                            </div>
                        )
                    })}

                    {/* <div class='card'>
                        <img src='./images/icon1.png' />
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div class='card'>
                        <img src='./images/icon2.png' />
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div class='card'>
                        <img src='./images/icon3.png' />
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the component's.</p>
                    </div>
                    <div class='card'>
                        <img src='./images/icon4.png' />
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div> */}
                </section>
            </div>
        )
    }
}

export default App;