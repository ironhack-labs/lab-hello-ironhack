const Card = props => {

    return (
        <article>
            <img src={ props.image } alt={ props.imageName } />
            <h4>{ props.title }</h4>
            <p>{ props.text }</p>
        </article>
    )
}

export default Card