import './cards.css'

const Cards = props => {

    return (
        <article>
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </article>

    )
}

export default Cards