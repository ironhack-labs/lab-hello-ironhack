// React imports
import React from 'react';
import HeaderMain from "../Components/Header/HeaderMain";
import TitleText from "../Components/TitleText/TitleText";
import Buttons from "../Components/Buttons/Buttons";
import CardItems from "../Components/CardItems/CardItems";
import './App.css'

function App() {
    return (
        <React.Fragment>
            <section className="header">
                <HeaderMain />
                <TitleText />
                <Buttons text='Awesdome!' />
            </section>

            <section className="presentation">
                <div className="cardsBox">
                    <CardItems cardIcon="./images/icon1.png" cardTitle="Declarative" cardText="React makes it painless to create interactive UIs." />
                    <CardItems cardIcon="./images/icon2.png" cardTitle="Components" cardText="Build encapsuled components that manage their state." />
                    <CardItems cardIcon="./images/icon3.png" cardTitle="Single-Way" cardText="A set of immutable values are apssed to the component's." />
                    <CardItems cardIcon="./images/icon4.png" cardTitle="JSX" cardText="Statically-typed designed to run on modern browsers." />

                </div>

            </section>
        </React.Fragment >
    )
}

export default App
