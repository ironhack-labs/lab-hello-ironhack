import React from "react";

const features = [
  {
    title: "Declarative",
    description: "React makes it painless to create interactive UIs",
    src: "/images/icon1.png"
  },
  {
    title: "Components",
    description: "Build encapsulated components that manage their state",
    src: "/images/icon2.png"
  },
  {
    title: "Single-Way",
    description: "A set of immutable values are passed to the components",
    src: "/images/icon3.png"
  },
  {
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers",
    src: "/images/icon4.png"
  }
];

export class Features extends React.Component {
  render() {
    let feature1 = features[0];
    let feature2 = features[1];
    let feature3 = features[2];
    let feature4 = features[3];

    return (
      <div id="features-bloc center">
        <div className="feature-bloc">
          <img src={feature1.src} />
          <h1>{feature1.title}</h1>
          <p>{feature1.description}</p>
        </div>

        <div className="feature-bloc ">
          <img src={feature2.src} />
          <h1>{feature2.title}</h1>
          <p>{feature2.description}</p>
        </div>

        <div className="feature-bloc ">
          <img src={feature3.src} />
          <h1>{feature3.title}</h1>
          <p>{feature3.description}</p>
        </div>

        <div className="feature-bloc ">
          <img src={feature4.src} />
          <h1>{feature4.title}</h1>
          <p>{feature4.description}</p>
        </div>
      </div>
    );
  }
}
