import React, {Component} from 'react';

import "./Main.css";

class Nav extends Component {
	render() {

		return (
			<header>
				<nav>
					<img src="/images/ironhack-logo.svg" id="ih-logo"/>
					<img src="/images/menu-top.svg" id="menu-logo"/>
				</nav>
			</header>
		);	
	}
};

export default Nav;