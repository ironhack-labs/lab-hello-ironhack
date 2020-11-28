import React, {Component} from 'react';

class CardList extends Component {
    render({img, title, description}=this.props) {
        return (
            <div id="property">
                <img src={img}/>
                <h3>{title}</h3>
                <span><p>{description}</p></span>
            </div>
        )
    }
}

export default CardList;