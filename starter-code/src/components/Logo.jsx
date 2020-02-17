import React from "react";

export default function Logo({ url, alt }) {
  return (
    <a href="">
      <img src={url} alt={alt} id="logo" />
    </a>
  );
}
