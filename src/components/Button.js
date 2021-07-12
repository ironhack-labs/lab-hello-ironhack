import "./Button.css";

function Button (props) {
    return <a href = "#"><button className = "myButton">{props.message}</button></a>
}

export default Button;