import React, { Component } from "react";
import "./styles.css";

class UperIcons extends Component {

    render() {
        return(
            <div className="UpperIcons">
                <img src={this.props.left} />
                <img src={this.props.right} />
            </div>
        );
    }

}

export default UperIcons;