import React, { Component } from 'react';
import '../public/css/Home.css';
import Service from './components/Service';

class Home extends Component {
	render() {
		return (
			<div>
				<section className="Home">
					<nav className="Menu">
						<a href="#">
							<img src="images/ironhack-logo.svg" />
						</a>
						<a href="#">
							<img src="images/menu-top.svg" />
						</a>
					</nav>
					<div className="Content">
						<span>Say hello to</span>
						<span>ReactJS</span>
						<p>
							You will learn a Frontend framework from scratch, to become a
							Ninja Developer
						</p>
						<button>Awesome!</button>
					</div>
				</section>
				<section className="Services">
					<Service
						image="images/icon1.png"
						title="Declarative"
						description="React makes it painless to create UIs."
					/>
					<Service
						image="images/icon2.png"
						title="Components"
						description="Build encapsulated components that manage their state."
					/>
					<Service
						image="images/icon3.png"
						title="Single-Way"
						description="A set if immutable values are passed to the components."
					/>
					<Service
						image="images/icon4.png"
						title="JSX"
						description="Statically-typed designed to run on modern browsers."
					/>
				</section>
			</div>
		);
	}
}

export default Home;
