import React from 'react';
import { Menu } from "./menu.js";
import { Section } from "./section.js";

const App = () => {
    return (
        <div>
            <Menu />
            <Section image="../images/icon1.png" title="Declarative" p1="React makes it" p2="painless to create" p3="interactive UIs." />
            <Section image="../images/icon2.png" title="Components" p1="Build encapsulated" p2="components that" p3="manage their state." />
            <Section image="../images/icon3.png" title="Single-Way" p1="Asset of immutable" p2="values are past to" p3="the component's." />
            <Section image="../images/icon4.png" title="JSX" p1="Statically-typed" p2="designed to run on" p3="modern browsers." />
        </div>
    )
}

export default App;