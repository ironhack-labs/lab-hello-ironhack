

const FirstSection = (props) => {

    const { title, subtitle, link } = props

    return (
        <div>

            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a href={link}>Awesome!</a>
        </div>
    )
}

export default FirstSection;

