import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <hero className="hero">
      <div className="headings">
        <h1>Say hello to ReactJS</h1>
        <h2>
          You will learn how to use the most popular frontend library, and
          become a super ninja developer.
        </h2>
        <button>Awesome</button>
      </div>
      <div className="react-logos">
        <div className="logo1-3">
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo1"
          />
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo2"
          />
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo3"
          />
        </div>
        <div className="logo4-6">
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo4"
          />
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo4"
          />
          <img
            src="/images/react-logo.svg"
            alt="React Logo"
            className="react-logo4"
          />
        </div>
      </div>
    </hero>
  );
}
