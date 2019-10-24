import React, { Component } from "react";

const Form = () => {
  return (
    <div>
      <label className="" htmlFor="name">
        Enter name:
      </label>
      <input type="text" name="" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }} type="submit">
        Submit
      </button>
    </div>
  );
};
