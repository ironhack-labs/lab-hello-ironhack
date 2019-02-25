import React, { Component } from "react";

class Features extends Component{
    render(){
        return <div className="containerFeatures">
            <div className="containerCard">
                <img src="/images/icon1.png" alt="icon1"></img>
                <h5>Declarative</h5>
                <p>React makes it painless to create interactive UIs</p>
            </div>

            <div className="containerCard">
                <img src="/images/icon2.png" alt="icon1"></img>
                <h5>Components</h5>
                <p>Build encapsulated  components that manage their state </p>
            </div>


            <div className="containerCard">
                <img src="/images/icon3.png" alt="icon1"></img>
                <h5>Single-way</h5>
                <p>A set of immutable values are passed to the components </p>
            </div>

            <div className="containerCard">
                <img src="/images/icon4.png" alt="icon1"></img>
                <h5>JSX</h5>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>




        </div>
    }
}


export default Features;