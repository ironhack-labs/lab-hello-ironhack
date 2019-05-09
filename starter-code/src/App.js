import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
	render() {
		let Item1 = {
			imgURL: '/images/icon1.png',
			title: 'Declarative',
			text: 'Rect makes it painless to create interactive UIs'
		};

		let Item2 = {
			imgURL: '/images/icon2.png',
			title: 'Components',
			text: 'Build encapsulated components that manage their state;'
		};

		let Item3 = {
			imgURL: '/images/icon3.png',
			title: 'Single-Way',
			text: "A set of immutable values are passed to the component's"
		};

		let Item4 = {
			imgURL: '/images/icon4.png',
			title: 'JSX',
			text: 'Statically typed designed to run on modern browsers'
		};

		return (
			<div className="App">
				<img class="logo1" src="/images/ironhack-logo.svg" />
				<img class="logo2" src="/images/menu-top.svg" />
				<img class="logo3" src="/images/react-logo.svg" />
				<div className="header">
					<h1>
						Say Hello to <br /> ReactJS
					</h1>
					<p>
						You will learn a Frontend <br /> framework from scratch to <br /> become an Ninka Developer
					</p>
					<button type="button" class="btn btn-light">
						Awesome!
					</button>
				</div>

				<div className="items">
					<Item obj={Item1} />
					<Item obj={Item2} />
					<Item obj={Item3} />
					<Item obj={Item4} />
				</div>
			</div>
		);
	}
}

export default App;
