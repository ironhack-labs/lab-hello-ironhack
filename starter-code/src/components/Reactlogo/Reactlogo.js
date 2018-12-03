import React from "react";
import "./Reactlogo.css";

class Reactlogo extends React.Component {
    render() {
        return (
            <div className="logos-react">
                <div className="logos-left">
                    <img src="images/react-logo.svg" className="logo1" />
                    <img src="images/react-logo.svg" className="logo2" />
                    <img src="images/react-logo.svg" className="logo3" />
                </div>
                <div className="logos-right">
                    <img src="images/react-logo.svg" className="logo4" />
                    <img src="images/react-logo.svg" className="logo5" />
                    <img src="images/react-logo.svg" className="logo6" />
                </div>
            </div>
        );
    }
}

export default Reactlogo;