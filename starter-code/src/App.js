import React, { Component } from "react";
import "./App.css";

class App extends Component {

	render() {
			const title = <h1>Say hello to ReactJS</h1>;
			const text = <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>;
			const btn = <button>Awesome!</button>
			const card01 = {
				img: '/images/icon1.png',
				title: 'Declarative',
				text: 'React makes it painless to create interactive UIs.',
			}
			const card02 = {
				img: '/images/icon2.png',
				title: 'Components',
				text: 'Build encapsulated components that manage their state.',
			}
			const card03 = {
				img: '/images/icon3.png',
				title: 'Single-way',
				text: 'A set of immutable values are passed to the components.',
			}
			const card04 = {
				img: '/images/icon4.png',
				title: 'JSX',
				text: 'Statically-typed designed to run on modern browsers.',
			}
			const nav = (
				<nav>
					<div class="nav-left">
						<img src="/images/ironhack-logo.svg" alt="logo" />
					</div>
					<div class="nav-right">
						<img src="/images/menu-top.svg" alt="menu top" />
					</div>
				</nav>
			)
		return (
			<div className="App">
				<header>
				{nav}
				<div id="cover">
					{title}
					{text}
					{btn}
				</div>
				</header>
				<div id="cards-container">
				<div class="card">
					<img src={card01.img} alt={card01.text} />
					<h2>{card01.title}</h2>
					<p>{card01.text}</p>
				</div>
				<div class="card">
					<img src={card02.img} alt={card02.text} />
					<h2>{card02.title}</h2>
					<p>{card02.text}</p>
				</div>
				<div class="card">
					<img src={card03.img} alt={card03.text} />
					<h2>{card03.title}</h2>
					<p>{card03.text}</p>
				</div>
				<div class="card">
					<img src={card04.img} alt={card04.text} />
					<h2>{card04.title}</h2>
					<p>{card04.text}</p>
				</div>
				</div>
			</div>
		);
 }
}

export default App;