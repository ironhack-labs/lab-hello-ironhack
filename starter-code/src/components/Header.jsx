import React, { Component } from 'react';
import IronLogo from './IronLogo';
import MenuIcon from './MenuIcon';
import ShowTitle from './ShowTitle';
import Heading from './Heading';
import MichaelBay from './MichaelBay';

class Header extends Component {
	render() {
		return (
			<header>
				<IronLogo />
				<MenuIcon />
				<ShowTitle />
				<Heading />
				<MichaelBay />
			</header>
		);
	}
}

export default Header;
