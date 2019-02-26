import React, {Component} from 'react'

class Nav extends Component {
	state = {
		logo: 'images/ironhack-logo.svg',
		button: '/images/menu-top.svg'
	}

	render () {
		let {logo} = this.state
		let {button} = this.state
		return (
			<nav id="nav-bar">
				<img src={logo} alt='logo' />
				<img src={button} alt='menu' />
			</nav>
		)
	}
}

export default Nav