import React from "react";
import "../../public/css/HelloReact.css";

class HelloReact extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from sratch, to became an Ninka Developer.</p>
                    <button type="button">Awesome!</button>
                </div>
            </div>
        )
    }
}

export default HelloReact;
