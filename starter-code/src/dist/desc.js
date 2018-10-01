import React from "react"

import Section from "./section"


const desc = (
    <div style={{ margin:"50px auto" }} className='container columns'>
        <div className='column'>
            <Section path="./images/icon1.png"
                title="Declarative"
                text1="React makes it"
                text2="painless to create"
                text3="interactive UIs." />
        </div>
        <div className='column'>
            <Section path="./images/icon2.png"
                title="Components"
                text1="Build encapsulated"
                text2="components that"
                text3="manage their state." />
        </div>
        <div className='column'>
            <Section path="./images/icon3.png"
                title="Single-way"
                text1="A set of immutable"
                text2="values are passed to"
                text3="the components." />
        </div>
        <div className='column'>
            <Section path="./images/icon4.png"
                title="JSX"
                text1="Statically-typed,"
                text2="designed to run on"
                text3="modern browsers." />
        </div>

    </div>
);

module.exports = desc;