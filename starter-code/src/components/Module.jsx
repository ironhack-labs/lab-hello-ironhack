import React, { Component } from 'react';

class Module extends Component {
	render() {
		return (
			<article>
				<img src={this.props.img} alt={this.props.title} />
				<h2>{this.props.title}</h2>
				<p>{this.props.text}</p>
			</article>
		);
	}
}

export default Module;
