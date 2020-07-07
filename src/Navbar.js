import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="col">
                        <img src="../images/ironhack-logo.svg" alt="Ironhack Logo" />
                    </div>
                    <div className="col">
                        <img src="../images/menu-top.svg" alt="Menu top icon" />
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;