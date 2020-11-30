import Title from './Title'

const Article = props => {

    const titleText = `${props.title}`
    return (
        <article className="features">
            <img src={props.avatar} />
            <Title text={titleText} />
            <p>{props.paragraph}</p>
        </article>
    )
}


export default Article