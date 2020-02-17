import React from 'react';
import Cta from './Cta';

export default function Information() {
    return (
        <div id="info-bucket">
            <Cta
                src="images/icon1.png"
                alt=""
                title="Declarative"
                text="React makes it painless to create interactive UIs"
            />
            <Cta
                src="images/icon2.png"
                alt=""
                title="Components"
                text="Build encapsulated components that manage their state"
            />
            <Cta
                src="images/icon3.png"
                alt=""
                title="Single-Way"
                text="A set of immutable values are passed to the components"
            />
            <Cta
                src="images/icon4.png"
                alt=""
                title="JSX"
                text="Statically-typed, designed to run on modern browsers"
            />

        </div>
    )
}
