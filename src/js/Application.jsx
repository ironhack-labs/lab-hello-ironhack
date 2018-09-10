import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";

class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Navigation />
                <Main />
            </div>
        );
    }
}

export default Application;
