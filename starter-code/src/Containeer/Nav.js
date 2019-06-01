import React, {
    Component
} from "react";
import "../App.css";
import Icon from "../Components/Icon"

class Nav extends Component {
    render() {
        return ( 
        <div class = "row">
            <Icon className = "leftIcon" source = "ironhack-logo.svg" / >
            <Icon className = "rightIcon" source = "menu-top.svg" / >
        </div>
        )
    }
}
export default Nav;