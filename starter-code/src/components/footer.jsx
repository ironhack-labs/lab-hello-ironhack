import React from "react";
import "./../styles/footer.css";

export default function footer({ src, title, txt }) {
  return (
    <div className="footer-element">
      <div className="img-container">
        <img src={src} alt="icone" />
      </div>
      <div className="txt-content-footer">
        <h5 className="footer-h5">{title}</h5>
        <h6 className="footer-h6">{txt}</h6>
      </div>
    </div>
  );
}
