import React, { Component } from 'react';
import '../../public/css/Service.css';

class Service extends Component {
	render() {
		return (
			<div className="Service">
				<img src={this.props.image} />
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Service;
