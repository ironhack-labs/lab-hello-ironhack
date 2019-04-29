import React from 'react';
import './App.css';

export default function Hero(props) {
	return (
		<div className="heroText">
			<h1 className="heroTitle">{props.title}</h1>
			<h3 className="heroSub">{props.sub}</h3>
		</div>
	)
}