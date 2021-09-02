import React from 'react';
import '../app.css';
import Card from './Cards/card';

const features = () => (
    <section className="footer">
        <Card
        imgPath="/images/icon1.png"        
        title="Declarative"
        description="React makes it painless to create interactive UIs."
        />

        <Card
        imgPath="/images/icon2.png"        
        title="Components"
        description="Build encapsulated components that manage their state."
        />

        <Card
        imgPath="/images/icon3.png"        
        title="Single-Way"
        description="A set of immutable values are passed to the components."
        />

        <Card
        imgPath="/images/icon4.png"        
        title="JSX"
        description="Statically-typed, designed to run on modern web browsers."
        />
    </section>
);

export default features;