import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  render() {
      const data = [{image:'/images/icon1.png', title: 'Declarative', text: 'React make it painless to create interative UIs.' }, {image: '/images/icon2.png', title: 'Components', text: 'Build encapsulated components that manage their state.'}, {image: '/images/icon3.png', title: 'Single-way', text: "A set of immutable values are passed to the component's."}, {image: '/images/icon4.png', title: 'JSX', text: 'Statically-typed designed to run on modern browsers.'}];
        const tag = data.map(el=>{return (<div>
            <img className='imagesBody' src={el.image} />
            <h1>{el.title}</h1>
            <p>{el.text}</p>
        </div>)})
        
    return (
      <div className="Body">
       {tag}
      </div>
    );
  }
}

export default Body;