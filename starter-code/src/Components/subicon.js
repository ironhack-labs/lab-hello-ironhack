import React, {
    Component
} from "react";
import "../App.css";


class SubIcon extends Component {
    render(){
        const {classname, title, subtext} = this.props;
        return (
            <div class = {classname}>
            <h2>
                {title}
            </h2>
            <h4>
                {subtext}
            </h4>
            </div>
        )
    }
}

export default SubIcon;