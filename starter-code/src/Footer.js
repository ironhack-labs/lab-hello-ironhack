import React, { Component } from "react";


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <div>
            <img src="../images/icon1.png" alt="1"/>
            <h3>Declarative</h3>
            <p>
              React makes it <br/>
              painless to create <br/>
              interactive UIs.
            </p>
          </div>
          <div>
            <img src="../images/icon2.png" alt="2"/>
            <h3>Components</h3>
            <p> 
              Build encapsulated <br/> 
              components that <br/>
              manage their state.</p>
          </div>
          <div>
            <img src="../images/icon3.png" alt="3"/>
            <h3>Single-Way</h3>
            <p>
            A set of immutable <br/>
            values are passed to <br/>
            the component's</p>
          </div>
          <div>
            <img src="../images/icon4.png" alt="4"/>
            <h3>JSX</h3>
            <p>Statically-typed, <br/>
            designed to run on <br/>
            modern browsers</p>
          </div>
          
        
      </div>
    );
  }
}

export default Footer;