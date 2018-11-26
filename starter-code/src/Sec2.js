import React, {Component} from "react";

import "./Main.css";

class Sec2 extends Component {
	render() {
		return(
			<section className="about">
				<div>
					<img src="/images/icon1.png"/>
					<h4>Declarative</h4>
					<p>React makes it painless to create interactive UIs.</p>
				</div>
				<div>
					<img src="/images/icon2.png"/>
					<h4>Components</h4>
					<p>Build encapsulated components that manage their state.</p>
				</div>
				<div>
					<img src="/images/icon3.png"/>
					<h4>Single-Way</h4>
					<p>A set of immutable values are passed to the components.</p>
				</div>
				<div>
					<img src="/images/icon4.png"/>
					<h4>JSX</h4>
					<p>Statically-types, designed to run on modern browsers.</p>
				</div>
			</section>
		);
	}
};

export default Sec2;