import React from 'react';
import './App.css';
import Icons from './component/menuBar/portrait'
import Title from './component/title/title'
import Section from './component/sections/sections'
function App() {
  return (
    <main>
      <div className="container icons">
        <section>
          <Icons />
        </section>
        <section>
          <Title />
        </section>

      </div>
      <div className="container">

        <section className="row">
          <Section image="/images/icon1.png" titleText="Declarativeee" paragraph="React makes it painless to create interactive UI's" />
          <Section image="/images/icon2.png" titleText="Components" paragraph="Build encapsulated components that manage their state" />
          <Section image="/images/icon3.png" titleText="Single-Way" paragraph="A set of immutable values are passed to the component's" />
          <Section image="/images/icon4.png" titleText="JSX" paragraph="Statically-typed desined to run on modern browser" />
        </section>
      </div>
    </main>
  );
}

export default App;
