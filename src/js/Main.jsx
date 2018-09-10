import React, { Component } from "react";
import moment from "moment";

// const currentDate = moment().format("DD.MM.YYYY");

class Main extends Component {
    // states
    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment()
        };

        // NEVER update state in render function!!
        this._updateTime = this._updateTime.bind(this);
    }

    // React-specific function
    // Used to fetch data (e.g. logged-in user)
    componentDidMount() {
        this.timeInterval = setInterval(this._updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        console.log("RENDERED MAIN CLASS");

        return (
            <div className="main">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn...</p>
                {/* {currentDate} */}
                {this._renderTime()}
                <button onClick={this._updateTime}>CLick me to update the time!</button>
            </div>
        );
    }

    // methods
    _updateTime() {
        this.setState({
            currentDate: moment()
        });
    }

    _renderTime() {
        return <h3>{this.state.currentDate.format("DD.MM.YYYY HH:mm:ss")}</h3>;
    }
}

export default Main;
