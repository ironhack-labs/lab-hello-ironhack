import React from "react";

export default class ReactWidget extends React.Component {
  render() {
    return (
      <section className="react-widget">
        <img src={this.props.imagen} />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </section>
    );
  }
}
