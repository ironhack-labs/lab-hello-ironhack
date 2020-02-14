import React, {Component} from "react";

class Card extends Component{
    
    constructor(props){
        super(props);
    }

    render(){

        //return some jsx here
        return(
        <div className="Card">
            <img src={this.props.url}></img>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>)
    }
}

export default Card;