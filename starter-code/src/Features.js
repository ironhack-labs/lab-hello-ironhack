import React, {Component} from 'react';
import './Features.css'

class Features extends Component {
    render(){
        return (
            <div className="features">
                <div>
                    <img src="./images/icon1.png"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painess to create interactive UIs.</p>
                </div>
                <div>
                    <img src="./images/icon2.png"></img>
                    <h3>Components</h3>
                    <p>React makes it painess to create interactive UIs.</p>
                </div>
                <div>
                    <img src="./images/icon3.png"></img>
                    <h3>Single-Way</h3>
                    <p>React makes it painess to create interactive UIs.</p>
                </div>
                <div>
                    <img src="./images/icon4.png"></img>
                    <h3>JSX</h3>
                    <p>React makes it painess to create interactive UIs.</p>
                </div>
            </div>
        )
    }
}

export default Features;