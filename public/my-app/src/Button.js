
const Button = (props) => {

    const { href, textButton } = props

    return (
        <a href={href}>{textButton}</a>
    )
}

export default Button