import React, { Component } from "react";
import moment from "moment";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment()
        };

        this._updateTime = this._updateTime.bind(this);

        this.timeInterval = setInterval(this._updateTime, 1000);
    }

    render() {
        return (
            <header className="header">
                <h1>
                    {/* {this._renderGreeting()}  */}
                    {this._renderTime()}
                    <br /> ReactJS
                </h1>
                <p className="hero-copy">
                    You'll learn a Frontend Framework <br /> from Scratch and become <br /> a developer
                    ninja!
                </p>

                <br />
                <br />
                <br />
                <button onClick={() => this._updateTime()}>Update Time</button>
            </header>
        );
    }

    _updateTime() {
        this.setState({
            currentDate: moment()
        });
    }

    _renderTime() {
        return <h3>{this.state.currentDate.format("DD.MM.YYYY HH:mm:ss")}</h3>;
    }

    // _renderGretting() {
    //     // const curentDate = moment().format("DD.MM.YYYY");
    //     // const currentDate = moment().subtract(5, "hours");
    //     const currentDate = moment();
    //     let greeting;
    //     if (currentDate.hours() < 12) {
    //         greeting = <p className="greetings">Good Morning!</p>;
    //     } else if (currentDate.hours() < 18) {
    //         greeting = <p className="greetings">Good Afternoon</p>;
    //     } else {
    //         greeting = <p className="greetings">Good night</p>;
    //     }
    // }
}

export default Header;
