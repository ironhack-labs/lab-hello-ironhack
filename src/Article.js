

const Article = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        <article className="user-card">

            <img src={props.image} alt="Imagen" />
            <h3>{capitalize(props.title)} </h3>
            <p>{capitalize(props.content)}</p>

        </article>
    )
}

export default Article