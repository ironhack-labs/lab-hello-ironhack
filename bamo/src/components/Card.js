import './Card.css'

const Card = (props) => { return <article> <img src={props.image}></img> <h2>{props.title} </h2> <p>{props.description} </p> </article> }
export default Card