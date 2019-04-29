import React from 'react';
import './App.css';

export default function Point(props) {
	return (
		<div className="App">
			<div className="heroContainer">
				
			</div>
			<div className="pointItem">
				<img alt="icon" src="~/code/modules/week-6/labs/lab-hello-ironhack/submit-code/public/images/icon1.png" />
				<h1>{props.heading}</h1>
				<p>{props.txt}</p>
			</div>
		</div>
	)
}