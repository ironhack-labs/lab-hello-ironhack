import React, {Component} from "react"

import "./App.css";

class App extends Component {
    render(){
        return (
            <div>
                <section className="header">
                    <nav>
                        <img src="/images/ironhack-logo.svg" alt=""/>
                        <img src="/images/menu-top.svg" alt=""/>
                    </nav>
                        <div className="catch">
                            <h1>Say hello to ReactJS</h1>
                            <p>You will learn a frontend framework from scratch, to become a Ninja Developer</p>
                            <a>Awesome!</a>
                        </div>
                </section>
            
                <section className = "content">
            <div className = "one-item">
                <img src="/images/icon1.png" alt=""/>
                <h3>Declarative</h3>
                <p>Blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>

            <div className = "one-item">
                <img src="/images/icon2.png" alt=""/>
                <h3>Components</h3>
                <p>Blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>

            <div className = "one-item">
                <img src="/images/icon3.png" alt=""/>
                <h3>Single-Way</h3>
                <p>Blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>

            <div className = "one-item">
                <img src="/images/icon4.png" alt=""/>
                <h3>JSX</h3>
                <p>Blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
        
        </section>
            </div>

        );
    }

}



// export component CLASS so that you can display it in other files
export default App;

