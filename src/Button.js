import './Button.css'

const Button = props => {

    return (
        <a
            href={props.link}
            className="button"
            // target={targetValue}
            style={{ color: 'white' }}
        >
            {props.buttonText}
        </a>
    )
}

export default Button