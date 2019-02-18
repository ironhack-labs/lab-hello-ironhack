import React from 'react';
import "./NavBar.css"


class NavBar extends React.Component {
    render() {
        return <div className="nav-bar"><img className="nav-im-left" src="/images/ironhack-logo.svg" /><img className="nav-im-right" src="/images/menu-top.svg" /></div>
    }
} 

export default NavBar;