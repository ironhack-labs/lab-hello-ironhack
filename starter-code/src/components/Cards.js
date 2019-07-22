import React, {Component} from 'react';
import '../stylesheets/Cards.css';

class Cards extends Component {

  card() {
    return (
      <div className="card">
        <div className="card-title">Used by Instagram, Netflix, Paypal, Apple and many more.</div>
        <div className="card-image">
          <img src="/images/card.jpg" alt="card"/>
        </div>
        <div className="card-content">Roof party intelligentsia locavore, vaporware jean shorts ramps cred kombucha 
        asymmetrical. Taiyaki cliche man bun pickled williamsburg, gochujang meggings pitchfork la croix green 
        juice prism sustainable. Heirloom polaroid chartreuse, food truck copper mug 
        hexagon kogi lomo mlkshk messenger bag thundercats. Microdosing vegan whatever vaporware chia gochujang. </div>
        <div className="card-footer"> <a href="#">Link</a></div>
      </div>
    )

  }

  render() {

    return (
      <div className="Cards">
      
      
      {this.card()}
      {this.card()}
      {this.card()}
      


    </div>
  );
}
}

export default Cards;
