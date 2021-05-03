import './Button.css'

const Button = props => {

    return (
        <a  href={props.link} className="button">
            {props.text}
        </a>
    )
}

export default Button