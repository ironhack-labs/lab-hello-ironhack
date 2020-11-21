import React, {Component} from "React";

export class CardList extends Component {
    render() {
        return(
            <div className="cardStyles">
                <img src={img}/>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        )
    }
}