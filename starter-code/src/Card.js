import React, { Component } from "react";
import "./styles.css";

import Card from "./Card";

class App extends Component {
  
  // constructor() {}

  // componentWillMount() {}

  render() {
    
    const cards = [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS01nx3hWZIpqJ5hWiL9xY0rAMAryX2sI28fTY6yHSo9TyGs6tV&usqp=CAU",
        text: "Imagen lowpoly"
      }
    ];

    return <div className="App">{cards.map(card => <Card {...card} />)}</div>;

  }
};

//componentDidMount() {}

export default App;

