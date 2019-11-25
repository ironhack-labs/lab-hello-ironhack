import React, { Component } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import MainContent from './MainContent';
import MainButton from './MainButton';



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

                </div>

            </React.Fragment>
        )
    }
}

export default App
