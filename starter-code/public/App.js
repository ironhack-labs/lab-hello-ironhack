import React from 'react'
import Card from './src/components/'

function App() {
    return (
        <>
            <header>
                <img src="./images/ironhack-logo.svg" />
                <img src="./images/menu-top.svg" />
            </header>
            <main>
                <Card src="./images/icon1.png" title="Declarative" content="React makes it painless to create interactive UIs" />
                <Card src="./images/icon2.png" title="Components" content="Build encapsulated that manage their state" />
                <Card src="./images/icon3.png" title="Single-Way" content="A set of immutable values are passed to the components" />
                <Card src="./images/icon4.png" title="JSX" content="Statically-typed, designed to run on modern browsers" />
            </main>
        </>
    )
}

export default App