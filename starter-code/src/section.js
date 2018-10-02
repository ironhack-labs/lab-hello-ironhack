import React from 'react';

/* export const Section = () => {
    return (
        <div width="25%">
            <img src="../images/icon1.png" />
            <h2> Declarative </h2>
            <p> React makes it <br />painless to create <br />interactive UIs. </p>
        </div>
    )
} */

export const Section = ({ image, title, p1, p2, p3 }) => {
    return (
        <div width="25%" style={sectionStyles}>
            <img src={image} />
            <h2> {title} </h2>
            <p> {p1} </p>
            <p> {p2} </p>
            <p> {p3} </p>
        </div>
    )
}