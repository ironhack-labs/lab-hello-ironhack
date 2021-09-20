import "./Article.css"

const Article = (props) => {
    return (
        <article>
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default Article;