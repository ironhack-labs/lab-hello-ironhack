import React, { Component } from "react";
import Icons from './components/Icons/Icons'

class Articles extends Component {
  render() {
    let data =[
        {
            img:"/images/icon1.png",
            title:"Declarative",
            text:"React makes it painless toc reate interactive UIs ",
        },
        {
            img:"/images/icon2.png",
            title:"Components",
            text:"Build encapsulated components that manage their state ",
        },
        {
            img:"/images/icon3.png",
            title:"Single-Way",
            text:"A set of immutable values are passed to the component's ",
        },
        {
            img:"/images/icon4.png",
            title:"JSX",
            text:"Statically-typed. designed to run on modern browsers ",
        }
    
    ]
    return (
      <div className="Articles">
        <div className="component-articles">
          {data.map((x,index)=>{
              return (
                    <Icons  image={x.img} title={x.title} text={x.text}/>)}
              )
          }
          
        </div>
       </div>
    );
  }
}

export default Articles;
