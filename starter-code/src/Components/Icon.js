import React, {
    Component
} from "react";
import "../App.css";

class Icon extends Component {
    render() {
        const {className} = this.props;
        let {source} = this.props;
        source = "/images/" + source;
        return ( 
        <img className = {className} src = { source } />
        );
    }
}

export default Icon;