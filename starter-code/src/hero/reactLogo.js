import React from "react";

export default class ReactLogo extends React.Component {
  render() {
    return (
      <div
        className="react-logo"
        style={{
          top: this.props.top,
          left: this.props.left,
          width: this.props.size,
          height: this.props.size
        }}
      ></div>
    );
  }
}
