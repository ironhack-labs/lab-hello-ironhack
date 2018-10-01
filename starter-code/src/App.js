import React from "react";

const Description = ({src, title, content}) => {
    return (
        <div className="description-container">
            <img src={src}></img>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export const App = () => {
    return (
        <div>
        <header>
            <h1>Say hello to React</h1>
            <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h2>
            <button>Awesome!</button>
        </header>
        <section>
            <Description src="/images/icon1.png" title="Declarative" content="React makes it painless to create interactive UIs"></Description>
            <Description src="/images/icon2.png" title="Components" content="Build encapsulated componenets that manage their state"></Description>
            <Description src="/images/icon3.png" title="Single-Way" content="A set of immutable values are passed to the component's"></Description>
            <Description src="images/icon4.png" title="JSX" content="Statically-typed, designed to run on modern browsers"></Description>
        </section>
        </div>
    )
}