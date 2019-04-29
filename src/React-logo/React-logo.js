import React from "react";
import "./react-logo.css";

function Logo({ react }) {
  return (
    <div className="logo-react">
      <img alt="reactl" className="react" src={react} />
    </div>
  );
}
export default Logo;
