import React, {
    Component
} from "react";
import "../App.css";
import SubIcon from "../Components/subicon"
import Icon from "../Components/Icon"


class Icons extends Component {
    render() {
        return (
            <div class ="icon-containeer">
            <div class="icon">
            <Icon className = "sub-icon" source = "icon1.png" / >
            <SubIcon className = "icon-title" title = "Declarative" subtext = "React Makes it painless create interactive UIs" />
            </div>
            <div class="icon">
            <Icon className = "sub-icon" source = "icon2.png" / >
            <SubIcon className = "icon-title" title = "Components" subtext = "Build encapsulated components that manage their state" />
            </div>
            <div class="icon">
            <Icon className = "sub-icon" source = "icon3.png" / >
            <SubIcon className = "icon-title" title = "Single-Way" subtext = "A set of immutable values are passed to the component's" />
            </div>
            <div class="icon">
            <Icon className = "sub-icon" source = "icon4.png" / >
            <SubIcon className = "icon-title" title = "JSX" subtext = "Statically-typed designed to run on modern browsers" />
            </div>
            </div>
        );
    }
}
export default Icons;