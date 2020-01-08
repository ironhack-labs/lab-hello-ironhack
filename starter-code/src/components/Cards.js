import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  render() {
    return(
      <div id='cards'>
      < Card title='Declarative' subtitle='sub' />
      < Card title='Components' subtitle='sub' />
      < Card title='Single-Way' subtitle='sub' />
      < Card title='JSX' subtitle='sub' />
      </div>
    )
  }
}

export default Cards;