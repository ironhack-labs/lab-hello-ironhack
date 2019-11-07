import React, {Component} from "react";
import "./App.css";

class App extends Component {
    render() {
        const element = (
            <div>
                <div>
                    <div className="images">
                        <img src="/images/ironhack-logo.svg" alt="dasd"/>
                        <img src="/images/menu-top.svg" alt=""/>
                    </div>
                    <div>
                        <h1 className="h1">Say hello to ReactJs
                        </h1>
                        <h2 className="h2">You will learn a Frontend framework from scratch, to become an Ninja Developer</h2>
                    </div>

                    <div className="botao">
                        <a href="#" className="botao">Awesome!</a>
                    </div>
                </div>

                <div className="list">
                    <div>
                        <img src="/images/icon1.png" alt=""/>
                        <h2>Declarative</h2>
                        <p>React makes it</p>
                    </div>
                    <div>
                        <img src="/images/icon2.png" alt=""/>
                        <h2>Components</h2>
                        <p>React makes it</p>

                    </div>
                    <div>
                        <img src="/images/icon3.png" alt=""/>
                        <h2>Single-Way</h2>
                        <p>React makes it</p>

                    </div>
                    <div>
                        <img src="/images/icon4.png" alt=""/>
                        <h2>JSX</h2>

                    </div>
                </div>

            </div>
        );
        return (
            <div className="App">
                {element}
            </div>
        );
    }
}

export default App;
