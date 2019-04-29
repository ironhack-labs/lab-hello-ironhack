import React from "react";
import NavBar from "./components/NavBar"
import HelloReact from "./components/HelloReact"
import CardContainer from "./components/CardContainer"
import "./App.css"

class App extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <NavBar></NavBar>   
                    <HelloReact></HelloReact>
                </header>
                <CardContainer></CardContainer>
            </div>
        )
    }
}

export default App;