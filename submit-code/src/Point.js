import React from 'react';
import './App.css';

export default function Point(props) {
	return (
		<div className="pointItem">
			<img className="pointImage" alt="icon" src={props.src} />
			<h1>{props.heading}</h1>
			<p className="pointText">{props.txt}</p>
		</div>
	)
}