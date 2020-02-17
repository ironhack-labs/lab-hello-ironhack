import React from 'react'
import Container from './Container'

export default function Containers() {
    return (
        <div className="Containers">
            <Container imgSrc="./../images/icon1.png" title="Declarative" text="React makes it painless to creat responsive UIs."></Container>
            <Container imgSrc="./../images/icon2.png" title="Components" text="Build encapsulate components that manage their state."></Container>
            <Container imgSrc="./../images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the component's."></Container>
            <Container imgSrc="./../images/icon4.png" title="JSX" text="Statically typed, designed to run on modern browsers."></Container>
        </div>
    )
}
