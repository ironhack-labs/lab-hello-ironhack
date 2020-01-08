import React from 'react';
import CardContent from '../CardContent';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <CardContent title={this.props.title} content={this.props.subtitle} />
      </div>
    )
  }
}

export default Card;