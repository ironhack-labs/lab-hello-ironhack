import React from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import MenuButton from './components/menu-button/MenuButton';
import Title from './components/title/Title';
import Button from './components/button/Button';
import Feature from './components/feature/Feature';

const features = [
    {
        image: "./images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs."
    },
    {
        image: "./images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their state."
    },
    {
        image: "./images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are pased to the component's."
    },
    {
        image: "./images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
    }
]

const App = () => {
    return (
        <main id="container">

            <section id="top">
                <div id="navbar">
                    <Logo />
                    <MenuButton />
                </div>

                <Title />
                
                <Button />
            </section>

            <section id="bottom">
                <div id="feature-container">
                    {features.map(el => {
                        return <Feature key={el.title} image={el.image} featureTitle={el.title} description={el.description} />
                    })}
                </div>
            </section>

        </main>
    )
}

export default App;