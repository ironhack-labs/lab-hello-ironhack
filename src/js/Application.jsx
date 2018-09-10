import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import Header from "./Header";

// COMPONENT:
class Application extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Main />
            </div>
        );
    }
}

export default Application;
