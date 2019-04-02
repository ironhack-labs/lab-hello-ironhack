import React, { Component } from 'react';


class Content extends Component {
    render() {
            const { title, text, buttonText } = this.props;              
        return (
            <div className="content_container">
                
                <h1>{title}</h1>
                <p>{text}</p>
                <button>{buttonText}</button>
             </div>
        );
        }
}

export default Content;