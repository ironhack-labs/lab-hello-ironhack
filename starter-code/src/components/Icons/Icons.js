import React, { Component } from "react";

class Icons extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <img src={this.props.image} />
        <div className="box-articles">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Icons;
