import "./Title.css"

const Title = props => {
    return (
        <section className = "hero">
            <h1 className = "hello">{props.text}</h1>
            <p className = "learn">{props.paragraph}</p>
            
        </section>
    )
}

export default Title