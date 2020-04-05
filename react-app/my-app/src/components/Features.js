import React, { Component } from 'react';

class Features extends Component {
	render() {
		const {image, title, text} = this.props;
		return (
			<div className="features-box">
				<img src={ image } alt="image"/>
				<h2>{ title }</h2>
				<p>{ text }</p>
			</div>
		)

	}
}

export default Features