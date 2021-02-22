import React from "react";
import ReactDOM from "react-dom";

// const element = (
//     <h1>
//       Hello, {use}!
//     </h1>
//   );

  const myStyle = {
    height: "100vh",
    backgroundColor: "midnightblue",
    // margin: 0,
    // padding: 0
  };
  
  const element = (
      <div style={myStyle}>
      <h1>
          Say hello to
      </h1>
      <h1>
          ReactJS
      </h1>
      <p>
          You will learn how to use
      </p>
      <p>
          the most popular frontend library,
      </p>
      <p>
          and become a super Ninja developer.
      </p>

      <button type="button">Awesome!</button>

      </div>
  );

ReactDOM.render(
    element,
    document.getElementById('root')
);