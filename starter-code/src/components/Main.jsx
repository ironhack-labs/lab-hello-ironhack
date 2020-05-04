import React, { Component } from 'react';
import Module from './Module';

class Main extends Component {
	render() {
		return (
			<section>
				<Module img="/images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs." />
				<Module
					img="/images/icon2.png"
					title="Components"
					text="Build encapsuled components that manage their state."
				/>
				<Module
					img="/images/icon3.png"
					title="Single-Way"
					text="A set of immutable values are passed to the component's."
				/>
				<Module img="/images/icon4.png" title="JSX" text="Statically-typed, designed to run of modern browsers." />
			</section>
		);
	}
}

export default Main;
