import React, { Component } from "react";
import "./App.css";
class Elements extends Component {
    render() {
        const imgElements = [
            {
                photo: "/images/icon1.png",
                titre: "Declarative",
                description: "React makes it painless to create interactive UIs"
            },
            {
                photo: "/images/icon2.png",
                titre: "Component",
                description: "React makes it painless to create interactive UIs"
            },
            {
                photo: "/images/icon3.png",
                titre: "Single Way",
                description: "React makes it painless to create interactive UIs"
            },
            {
                photo: "/images/icon4.png",
                titre: "JSX",
                description: "React makes it painless to create interactive UIs"
            }
        ]
        return (
            <div className="Elements">
                {imgElements.map(element => {
                    return (
                        <div className="elementdiv">
                            <img src={element.photo}></img>
                            <h3>{element.titre}</h3>
                            <p>{element.description}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Elements;