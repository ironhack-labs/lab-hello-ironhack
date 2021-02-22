import React from 'react';
import './App.css';

class Options extends React.Component {
    render() {
        return (
            <div>
                <div className="section">
                    <img src={this.props.img} />
                    <h2>{this.props.h2}</h2>
                    <p>{this.props.p}</p>
                </div>
            </div>
        )
    }
}

export default Options;
