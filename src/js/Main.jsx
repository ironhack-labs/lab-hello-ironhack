import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <main className="main">
                    <div className="container">
                        <img src={require("/../public/react-logo.svg")} />
                        <h5>Declarative</h5>
                        <p>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit
                        </p>
                    </div>
                    <div className="container">
                        <img src={require("/../public/react-logo.svg")} />
                        <h5>Components</h5>
                        <p>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit
                        </p>
                    </div>
                    <div className="container">
                        <img src={require("/../public/react-logo.svg")} />
                        <h5>Single-Way</h5>
                        <p>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit
                        </p>
                    </div>
                    <div className="container">
                        <img src={require("/../public/react-logo.svg")} />
                        <h5>JSX</h5>
                        <p>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit
                        </p>
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;
