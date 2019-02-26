import React, {Component} from 'react'

class Cards extends Component {
	render () {
		return(
			<div id="cards">
				<div className="single-card">
					<img src={'images/icon1.png'} alt={"declarative"}/>
					<h4>Declarative</h4>
					<p>React makes it painless to create interactive UIs.</p>
				</div>
				<div className="single-card">
					<img src={'images/icon2.png'} alt={"components"}/>
					<h4>Components</h4>
					<p>Build encapsulated components that manage their state.</p>
				</div>
				<div className="single-card">
					<img src={'images/icon3.png'} alt={"single way"}/>
					<h4>Single-Way</h4>
					<p>A set of immutable values are passed to the components.</p>
				</div>
				<div className="single-card">
					<img src={'images/icon4.png'} alt={"jsx"}/>
					<h4>JSX</h4>
					<p>Statically-typed, designed to run on modern browsers.</p>
				</div>
			</div>
		)
	}
}

export default Cards