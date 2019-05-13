import React from 'react'
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';
import image1 from './icon1.png';
import image2 from './icon2.png';
import image3 from './icon3.png';
import image4 from './icon4.png';
import reactLogo from './react-logo.svg';

class Hello extends React.Component {
  render() {
    return (
      <div>
      <img class = "logo-ironhack" src = {logo}></img>
      <img class ="nav-dropdown" src ={menu}></img>
      
      <div class = "App">
      <img class = "react-logo" src = {reactLogo}></img>
        <h1>Say hello to ReactJS</h1>
        <img class = "react-logo-sm" src = {reactLogo}></img>
       
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        <img class = "react-logo-sm" src = {reactLogo}></img>
      </div>

      <button class = "btn" type="button">Awesome!</button>

<div class='footer-images'>
<div>
<img src = {image1}></img>
<h5>Declarative</h5>
<p>React makes it easy to create interactive UIs</p>
</div>
<div><img src = {image2}></img>
<h5>Components</h5>
<p>Build encapsulated components that manage their state</p>
</div>
<div><img src = {image3}></img>
<h5>Single-Way</h5>
<p>A set of immutable values are passed to the components.</p>
</div>
<div><img src = {image4}></img>
<h5>JSX</h5>
<p>Statically-typed, designed to run on modern browsers.</p>
</div>
</div>

      </div>
    )
  }
}
export default Hello