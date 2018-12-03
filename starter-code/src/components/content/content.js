import React from "react";
import "./content.css";
class Content extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="Content">
                <div className="text">
                    <h1>Say hello to ReactJS</h1>
                    <h3>You will learn a Frontend framework from scratch, to become a Ninka Developer</h3>
                    <button>Awesome!</button>
                </div>
            </div>
        );
    }
}

export default Content;