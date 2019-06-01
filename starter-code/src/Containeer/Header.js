import React, {
    Component
} from "react";
import "../App.css";
import Nav from "../Containeer/Nav";
import Tittle from "../Components/tittle";
import Button from "../Components/button"

class Header extends Component {
    render() {
        return (
            <header class = "background">
                <Nav />
                <div class="row-lm"></div>
                <div class="title">
                    <Tittle />
                </div>
                <div class="subtitle">
                    <h2>You will learn a Frontend framework from scratch, to become an Ninka Developer</h2>
                </div>
                <Button />
            </header>
        );
    }
}
export default Header;