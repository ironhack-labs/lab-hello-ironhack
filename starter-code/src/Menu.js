import React, { Component } from "React";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="xs">
				<Navbar.Brand href="#home">
					<img src="../images/ironhack-logo.svg" className="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Somewhere else</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Menu;
