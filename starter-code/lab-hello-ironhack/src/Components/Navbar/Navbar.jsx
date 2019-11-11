import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        console.log(`render is running for Navbar class`);

        return (
            <nav>
                <img src="/images/ironhack-logo.svg" alt="" />
                <h1>Ironhack</h1>
                <h2>Menu</h2>
            </nav>
        );
    }
}

export default Navbar;
