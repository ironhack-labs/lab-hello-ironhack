import React from 'react'
import './Main.css'

const Main = () => {
	return (
		<main>
			<div className="container main-icon">
				<div className="icon-container">
					<img src="./images/icon1.png" />
					<h3>Declarative</h3>
					<p>React makes it painless to create interactive UIs.</p>
				</div>
				<div className="icon-container">
					<img src="./images/icon2.png" />
					<h3>Components</h3>
					<p>Build encapsulated components that manage their state.</p>
				</div>
				<div className="icon-container">
					<img src="./images/icon3.png" />
					<h3>Single-Way</h3>
					<p>A set of inmutable values are passed to the components.</p>
				</div>
				<div className="icon-container">
					<img src="./images/icon4.png" />
					<h3>JSX</h3>
					<p>Statically-typed, designed to run on modern browsers.</p>
				</div>
			</div>
		</main>
	)
}

export default Main
