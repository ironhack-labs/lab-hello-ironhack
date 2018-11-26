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
  },
button:{
    fontFamily: 'fjalla One',
    marginTop: '3%',
    fontSize: '1.5em',
    border: '1px solid white',
    width: '21%',
    height: '9vh',
    borderRadius: '0.2em',
    backgroundColor: 'white',
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
      <button style={styles.button}>Awesome!</button>
    </div>
  );
};
 export default Header;