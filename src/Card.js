import React, { Component } from "react"
import "./Cards.css";

let data = [{
    img: "/images/icon1.PNG",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"

},
{
    img: "/images/icon2.PNG",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"

},
{
    img: "/images/icon3.PNG",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"

},
{
    img: "/images/icon4.PNG",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs"

}
]

const cardList = data.map( element => {

})

class Card extends Component {
    render() {
        return (
            <div className="on-line">
                <div>
                    <img src="/images/icon1.PNG" />
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div>
                    <img src="/images/icon2.PNG" />
                    <h2>Components</h2>
                    <p>Build encapsulted components that manage their state.</p>
                </div>
                <div>
                    <img src="/images/icon3.PNG" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
                <div>
                    <img src="/images/icon4.PNG" />
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>

            </div>
        )
    }
}

export default Card