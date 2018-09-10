import ReactDOM from "react-dom";
import React from "react";

const styles = {
  heading: {
    fontSize: "100px",
    color: "white",
    margin: "0px"
  },
  text: {
    color: "white",
    fontSize: "25px",
    margin: "0px"
  },
  header: {
    width: "550px",
    marginLeft: "150px"
  }
};

const Header = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.heading}>Say hello to ReactJS</h1>
      <p style={styles.text}>
        You will learn a frontend framework from scratch, to become a Ninja
        Developer
      </p>
      <button>Awesome!</button>
    </div>
  );
};

export default Header;
