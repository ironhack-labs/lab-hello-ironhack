import React, {Component} from "react"

class Nav extends Component {
	state = {
		// logo: "images/react-logo.svg",
		burgerMenu: "images/menu-top.svg",
	}

	render() {
		// let logo = this.state.logo
		let {burgerMenu} = this.state
		return (
				<nav>
					<img src="images/react-logo.svg" alt="logo"/>
					<img src=`${burgerMenu}` alt="menu"/>
				</nav>
		)
		}
	}

export default Nav