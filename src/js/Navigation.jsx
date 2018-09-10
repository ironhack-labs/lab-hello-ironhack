import React from 'react';

import ironhackLogo from '/../public/ironhack-logo.svg';

class Navigation extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="col">
					<img src={ironhackLogo} />
					<h3>Declarative</h3>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore.
					</p>
				</div>
				<div className="col">
					<img src={ironhackLogo} />
					<h3>Components</h3>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, tempor invidunt ut
						labore et dolore magna aliquyam erat, sed diam voluptua.
					</p>
				</div>
				<div className="col">
					<img src={ironhackLogo} />
					<h3>Single way</h3>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt
					</p>
				</div>
				<div className="col">
					<img src={ironhackLogo} />
					<h3>JSX</h3>
					<p>
						Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.
					</p>
				</div>
			</div>
		);
	}
}

export default Navigation;
