import React, {Component} from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import "./App.css";

export default class App extends Component{
    render() {
        const data =[
            {
             title:'Declarative',
             desc:'React makes it painless to create interactive UIs.',
             img:'./images/icon1.png'
            },
            {
             title:'Components',
             desc:'Build encapsulated components that manage their state.',
             img:'./images/icon2.png'
            },
            {
             title:'Single-Way',
             desc:`A set of inmutable values are passed to the component's`,
             img:'./images/icon3.png'
            },
            {
            title:'JSX',
            desc:`Statically-typed designed to run on modern browsers.`,
            img:'./images/icon4.png'
            }
        ]
        return(
            <div classname="container">
            <div className="main">  
        <Header/>
            <h1>Say Hello to ReactJS</h1>
                <h5>you will learn how to use the most popular frontend library, and become a super Ninja developer.</h5>
                <button>Awesome!</button>
                </div>
        <div className='Content'>
        {data.map((item,index)=>
        <Footer  key={index} title={item.title} desc={item.desc} img={item.img} />
        )}
         </div>
        </div>
     );
    }
}