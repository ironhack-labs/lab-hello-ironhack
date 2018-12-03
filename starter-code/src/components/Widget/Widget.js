import React from "react";
import "./Widget.css";

class Widget extends React.Component {
    state = {
        block1: {
            title: <h3>Declarative</h3>,
            text: <p>React makets it</p>,
            img: '/images/icon1.png'
        },
        block2: {
            title: <h3>Components</h3>,
            text: <p>Build encapsuled</p>,
            img: '/images/icon2.png'
        },
        block3: {
            title: <h3>Single-Way</h3>,
            text: <p>A set of immutable</p>,
            img: '/images/icon3.png'
        },
        block4: {
            title: <h3>JSX</h3>,
            text: <p>Statically-typed</p>,
            img: '/images/icon4.png'
        }
    }
    render() {
        return (
            <div className="widgets">
                <div>
                    <img src={this.state.block1.img} />
                    {this.state.block1.title}
                    {this.state.block1.text}
                </div>
                <div>
                    <img src={this.state.block2.img} />
                    {this.state.block2.title}
                    {this.state.block2.text}
                </div>
                <div>
                    <img src={this.state.block3.img} />
                    {this.state.block3.title}
                    {this.state.block3.text}
                </div>
                <div>
                    <img src={this.state.block4.img} />
                    {this.state.block4.title}
                    {this.state.block4.text}
                </div>
            </div>
        );
    }
}

export default Widget;