import React, { Component } from 'react';

const data = [
    {
      image: '/images/icon1.png',
      title: 'Declarative',
      text: 'React makes it painless to create interactive UIs.'
    },
    {
      image: '/images/icon2.png',
      title: 'Components',
      text: 'Build encapsulated components that manage their state.'
    },
    {
      image: '/images/icon3.png',
      title: 'Single-Way',
      text: 'A set of immutable values are passed to the component\'s.'
    },
    {
      image: '/images/icon4.png',
      title: 'JSX',
      text: 'Statically-typed designed to run on modern browsers.'
    }
  ];
  

class Article extends Component {
    render() {
                      
        return (
            <div className="cards">
            {data.map(card => {
                return  <div className="container">
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
            </div>
            })}  

            </div>  
        );
        }
}

export default Article;