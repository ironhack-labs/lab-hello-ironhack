import './Card.css'
const Card = props => {

    console.log('Estas son las props del alumno:', props)

    return (

        <article className="">

            <img src={props.image} alt={`${props.name}`} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>

        </article>
    )
}

export default Card