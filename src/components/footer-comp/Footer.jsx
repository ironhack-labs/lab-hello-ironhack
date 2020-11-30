import React from "react";
import "./Footer.css";
const blossom = "/images/blossom.png";
const bubbles = "/images/bubbles.png";
const buttercup = "/images/buttercup.png";

function Footer() {
  return (
    <div className="footer-section">
      <div className="individual">
        <h3 className="blossom">Blossom</h3>
        <img src={blossom} className="icon"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="blossom-btn">Learn more</button>
      </div>
      <div className="individual">
        <h3 className="bubbles">Bubbles</h3>
        <img src={bubbles} className="icon"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bubbles-btn">Learn more</button>
      </div>
      <div className="individual">
        <h3 className="buttercup">Buttercup</h3>
        <img src={buttercup} className="icon"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="buttercup-btn">Learn more</button>
      </div>
    </div>
  );
}

export default Footer;
