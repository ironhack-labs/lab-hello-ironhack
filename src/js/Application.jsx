import React from 'react';
//import ironhackLogo from '/../public/react-logo.svg';
import Navigation from './Navigation';
import Main from './Main';

class Application extends React.Component {
	render() {
		return (
			<div>
				<Main />
				<Navigation />
			</div>
		);
	}
}
// class Info extends React.Component {
// 	render() {
// 		return (

// 		);
// 	}
// }

export default Application;
