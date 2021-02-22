import React, { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png'
const icon3 = '/images/icon3.png'
const icon4 = '/images/icon4.png'
// ...

class App extends Component {
    render(){
        return(
          <div>
              <Header image='/images/ironhack-logo.svg' />
              <Footer image1={icon1} image2={icon2} image3={icon3} image4={icon4} />
          </div>
        )
      }
}

export default App;