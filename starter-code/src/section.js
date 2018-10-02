import React from 'react';

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