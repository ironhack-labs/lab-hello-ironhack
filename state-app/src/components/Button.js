import './Button.css'


const Button = props => {
    const buttonStyle = {
        margin: '10px',
        backgroundColor: props.customStyle === 'danger' ? '#fcbdbd' : 'white',
    
    }
    
    return (
        <div>
            <a style={buttonStyle} href='#' className="button">
            {props.text}
            </a>
        </div>
    )
}

export default Button