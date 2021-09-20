import './Button.css'

const Button = (props) => {
    return (
        <button
            className="margin"
        >
            {props.text}
        </button>
    )
}

export default Button