import './Article.css'

const Article = props => {

    return (

        <article className="features">

            <img src={props.image} alt={`${props.title}`} />
            <h3>{props.title} </h3>
            <p>{props.description}</p>

        </article>
    )
}

export default Article