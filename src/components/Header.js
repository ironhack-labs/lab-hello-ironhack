import React, { Component } from "react";

class Header extends Component {

    render() {

        return (
            <header id="header">
                <nav>
                    <a href="#">
                        <img src={this.props.logo}/>
                    </a>
                    <a href="#">
                        <img src={this.props.menu}/>
                    </a>
                </nav>
            </header>
        )

    }

}

export default Header