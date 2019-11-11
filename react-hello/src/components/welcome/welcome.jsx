import './welcome.css'
import React from "react";
// ^ this is always needed for any react components

class Welcome extends React.Component {
  render() {
    return (
      <h1 className="header">
        Hello, Juan!
      </h1>
    );
  }
}

export default Welcome;