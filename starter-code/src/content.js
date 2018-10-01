import React from "react";
import {NavBar} from './navBar.js';

export const Content = () => {
	return (
		<div className="main">
			<NavBar/>
			<div className="hero">
				<h1>Say hello to <br />ReactJS</h1>
				<p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
				<button>Awesome!</button>
			</div>
		</div>
	)
}