import React, { Component } from "react";
import moment from "moment";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment()
    };

    this._updateTime = this._updateTime.bind(this);
  }

  //calls function only after page has rendered
  componentDidMount() {
    this.timeInterval = setInterval(this._updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    console.log("Rendered main class");
    return (
      <div className="content">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a frontend framework from scratch to become a Ninka
          Developer
        </p>
        {this._renderTime()}
        <button onClick={this._updateTime}>Click me to update time!</button>
        <br />
        <button>
          <h2>Awesome !</h2>
        </button>
      </div>
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
}

export default Main;
