import React, { Component } from 'react';
import './App.css';

class Item extends Component {
	render() {
		return (
			<div className="item">
				<img src={this.props.obj.imgURL} />
				<h3>{this.props.obj.title}</h3>
				<p>{this.props.obj.text}</p>
			</div>
		);
	}
}

export default Item;
