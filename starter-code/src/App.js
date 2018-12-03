import React from "react";
import Header from "./components/Header/Header.js";
import Widgets from "./components/Widgets/Widgets.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Widgets/>
            </div>
        );
    }
}

export default App;