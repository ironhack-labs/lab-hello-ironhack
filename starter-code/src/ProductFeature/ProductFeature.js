import React from "react";
import "./ProductFeature.css";


export default class ProductFeature extends React.Component {
    render() {
        return (
           <li><img src={this.props.image} alt=""/>
           <h3>{this.props.name}</h3>
           <p>{this.props.children}</p>
           </li>
        )
    }
}
