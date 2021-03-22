import './center.css'

const Center = props => {
    return (
        <article>
            <img src={props.source}></img>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </article>
    )
}

export default Center