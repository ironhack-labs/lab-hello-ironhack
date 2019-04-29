import React from "react";
import "../../public/css/CardContainer.css";
import Card from "./Card";

class CardContainer extends React.Component {
    info = [
        {
            img: "./images/icon1.png",
            title: "Declarative",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit."
        },
        {
            img: "./images/icon2.png",
            title: "Components",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit."
        },
        {
            img: "./images/icon3.png",
            title: "Single-Way",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit."
        },
        {
            img: "./images/icon4.png",
            title: "JSX",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit."
        }
    ]
    render() {

        let cardElements = this.info.map((element, i) => {
            return <Card key={i} img={element.img} title={element.title} text={element.text}></Card>
        });

        return (
            <div className="cardContainer">
                {cardElements}
            </div>
        )
    }
}

export default CardContainer;