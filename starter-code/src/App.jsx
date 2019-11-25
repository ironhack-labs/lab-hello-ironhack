import React, { Component } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import MainContent from './MainContent';
import MainButton from './MainButton';
import CardInfo from './CardInfo';



export class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="mainPage">
                    <MainTitle />
                    <MainContent />
                    <MainButton />
                </div>
                <div className="infoPage">
                    <CardInfo img="/images/icon1.png"
                        title="Declarative"
                        p="React makes it painless to create interactives UIs." />
                    <CardInfo img="/images/icon2.png"
                        title="Components"
                        p="Build encapsulated components that manage their state." />
                    <CardInfo img="/images/icon3.png"
                        title="Single-Way"
                        p="A set of immutable values are passed to the component's" />
                    <CardInfo img="/images/icon3.png"
                        title="JSX"
                        p="Statically-typed, designed to run on modern browsers." />

                </div>

            </React.Fragment>
        )
    }
}

export default App
