import React from 'react';

class Item extends React.Component {
  
  render() {
    return (
      <div className="item">
        <img src={this.props.img} alt="" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Item;