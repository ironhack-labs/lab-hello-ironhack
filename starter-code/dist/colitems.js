import React from "react";
import column1 from "../public/images/icon1.png";
import column2 from "../public/images/icon2.png";
import column3 from "../public/images/icon3.png";
import column4 from "../public/images/icon4.png";

const cols = [
  {
    title: "Declarative",
    content: "React makes ir painless to create interactive UIs.",
    img: column1
  },
  {
    title: "Components",
    content: "Build encapsualted compoments thar manahe their slate.",
    img: column2
  },
  {
    title: "Single-Way",
    content: "A set of inmutable values are passed to the component's",
    img: column3
  },
  {
    title: "JSX",
    content: "Statically-typed designed to run on modern browers.",
    img: column4
  }
];

export const ColItems = () => {
  return (
    <div className="column-4">
      {cols.map((col, i) => {
        return (
          <div key={i} className="col-item">
            <div className="box-img">
              <img src={col.img} />
            </div>
            <h1>{col.title}</h1>
            <p>{col.content}</p>
          </div>
        );
      })}
    </div>
  );
};
