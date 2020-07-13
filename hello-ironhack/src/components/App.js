import React from 'react';
import './App.css';
import Hero from "./Hero/Hero"
import Card from "./Card/Card"
function App() {
  return (
    <main>
      <Hero />
      <section className="article-container">
        <Card source="../../images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
        <Card source="../../images/icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
        <Card source="../../images/icon3.png" title="Single way" text="A set of immutable values are passed to the component's"/>
        <Card source="../../images/icon4.png" title="JSX" text="Statically-typed desiged to run on modern browsers."/>
      </section>
    </main> 
  );}

export default App;