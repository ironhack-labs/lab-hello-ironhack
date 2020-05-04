import React from 'react'
import './Header.css'

const Header = () => {
	return (
		<header>
			<div className="container">
				<nav>
					<img src="/images/ironhack-logo.svg" />
					<img src="/images/menu-top.svg" />
				</nav>

				<h1>
					Say hello to<br></br>ReactJS
				</h1>
				<p>
					You will learn a Frontend<br></br>framework from scratch,<br></br>to become a Ninja Developer.
				</p>
				<button>Awesome!</button>
			</div>
		</header>
	)
}

export default Header
