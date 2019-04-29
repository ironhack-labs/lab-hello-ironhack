import React from "react";
import Header from "../src/Header"
import CardContainer from "../src/CardContainer"

class App extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <CardContainer />
            </div>
        )
    }
}

export default App;