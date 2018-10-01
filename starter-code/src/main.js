import React from "react";

const Feature = ({title, subtitle = "No subtitle ", img}) => {
    return (
        <div>
            <img src={img}/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}


export const Main = () => {
    return (
        <div style={{display: "flex"}}>

            <Feature title="Declarative" subtitle="reactdekldsncelk cdjcece ecgbwhegd" img="images/icon1.png"/>
            <Feature title="Components" subtitle="reactdekldsncelk cdjcece ecgbwhegd" img="images/icon2.png"/>
            <Feature title="Single-Way" subtitle="reactdekldsncelk cdjcece ecgbwhegd" img="images/icon3.png"/>
            <Feature title="JSX" subtitle="reactdekldsncelk cdjcece ecgbwhegd" img="images/icon4.png"/>

        </div>
    );

}

