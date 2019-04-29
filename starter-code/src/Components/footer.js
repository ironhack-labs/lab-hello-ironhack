import React, { Component } from 'react'
import Declarative from './declarative';
import "./footer.css";


export default class footer extends Component {
  render() {
    return (
      <div className="row">
        <Declarative source="/images/icon2.png" title="Components " text="This is the text of components" />
        <Declarative source="/images/icon1.png" title="Declarative " text="This is the text of declarative" />
        <Declarative source="/images/icon3.png" title="Single-Way " text="This is the text of single-way" />
        <Declarative source="/images/icon4.png" title="JSX " text="This is the text of JSX" />
      </div>

    )
  }
}
