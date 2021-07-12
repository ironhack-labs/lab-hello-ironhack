import './Card.css'

const Card = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        <article className="user-card">

            <img src={props.image} alt={props.image} />

            <br></br>

            <h2>{capitalize(props.title)}</h2>

            <article>{capitalize(props.article)}</article>


        </article>
    )
}

export default Card