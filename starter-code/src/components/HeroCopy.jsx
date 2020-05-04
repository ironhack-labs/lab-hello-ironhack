import React, { Component } from "react";

function HeroCopy(props) {
  return (
    <div className='hero-copy'>
      <h1> Say hello to ReactJS </h1>{" "}
      <h4>
        You will learn a front - end framework from scratch, to become a Ninja
        developer.{" "}
      </h4>{" "}
      <button> Awesome! </button>{" "}
    </div>
  );
}

export default HeroCopy;

// Trying out classes, works as well

// export default class HeroCopy extends Component {
//   render() {
//     return (
//       <div className='hero-copy'>
//         <h1> Say hello to ReactJS </h1>{" "}
//         <h4>
//           You will learn a front - end framework from scratch, to become a Ninja
//           developer.{" "}
//         </h4>{" "}
//         <button> Awesome! </button>{" "}
//       </div>
//     );
//   }
// }
