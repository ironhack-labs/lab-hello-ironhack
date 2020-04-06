import React, { Component } from 'react';
import './App.css';

class Card extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="card" >
                    <img src={require(`${this.props.image}`)} alt="A"></img>
                    <div className="card-info">
                        <h4>                        {this.props.title}</h4>
                        <p>{this.props.desc}</p>

                    </div>
                </div>

            </div >
        );
    }
}





export default Card;
