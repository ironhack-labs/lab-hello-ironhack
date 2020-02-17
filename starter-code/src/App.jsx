import React from "react";
import Logo from "./components/Logo";
import Sandwich from "./components/Sandwich";
import Text from "./components/Text";
import Button from "./components/Button";
import DescriptionBlock from "./components/DescriptionBlock";
import "./styles/App.css";

const descriptions = [
  {
    source: "images/icon1.png",
    title: "Declarative",
    text: "React makes it painless to create interactive Uls"
  },
  {
    source: "images/icon2.png",
    title: "Components",
    text: "Build encapsulated components that manage their state"
  },
  {
    source: "images/icon3.png",
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's"
  },
  {
    source: "images/icon4.png",
    title: "JSX",
    text: "Statically-typed, designed to run on modern browers"
  }
];

export default function App() {
  return (
    <React.Fragment>
      <div className="background">
        <nav className="flex">
          <Logo />
          <Sandwich />
        </nav>
        <section className="main">
          <Text />
          <Button />
        </section>
      </div>
      
      <div className="img-boxes center">
        {descriptions.map(a => (
          <DescriptionBlock source={a.source} title={a.title} text={a.text} />
        ))}
      </div>
    </React.Fragment>
  );
}
