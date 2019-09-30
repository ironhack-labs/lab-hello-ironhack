import React, { Component } from 'react';
import Footer from './Footer';
import "./app.css";
import Main from './Main';

export default class App extends Component {
  constructor(){
    super();
    
    this.footers = [

      {
        fImage : "../images/icon1.png",
        fTitle: "Declarative",
        fText: "React makes it painless to create interactive UIs"
      },
      {
        fImage : "../images/icon2.png",
        fTitle: "Components",
        fText: "Build encapsulated component that manage their state"
      },
      {
        fImage : "../images/icon3.png",
        fTitle: "Single-Way",
        fText: "A set of immutable values are passed to the components"
      },
      {
        fImage : "../images/icon4.png",
        fTitle: "JSX",
        fText: "Statically-typed designed to run on modern browsers"
      }
    ];
  }


  render() {
    return (
      <div className="App">
       <Main></Main>
        
        <div className="container">

        {
          this.footers.map(footer=>(
            <div className="components">

              <Footer
              fImage={footer.fImage}
              fTitle={footer.fTitle}
              fText={footer.fText}
              ></Footer>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}
