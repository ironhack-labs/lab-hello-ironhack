import "./Article.css"

const Article = props => {
    return (

        <div className="card">
            <article >
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
            </article>
        </div>
    )
}

export default Article