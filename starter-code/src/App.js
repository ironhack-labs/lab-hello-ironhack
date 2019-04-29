import React from "react";
import "./App.css";
import MainBox from "./MainBox";
import Container from "./Container";

class App extends React.Component {
    render() {
        return (
            <div>
                <MainBox />
                <Container />
            </div>
        )
    }
}

export default App;

