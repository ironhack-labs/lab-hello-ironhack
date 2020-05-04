import React from 'react';
import NavBar from './headerComponents/Navbar';

import ButtonAwesome from './headerComponents/ButtonAwesome';

const Header = (props) => {
	return (
		<div>
			<NavBar> </NavBar>
			<h2>
				Say hello to <br></br> React.JS
			</h2>
			<p>
				You will learn a Frontend <br></br> framework from scratch, <br></br>
				to become a Ninja Developer.
			</p>
			<ButtonAwesome></ButtonAwesome>
		</div>
	);
};

export default Header;
