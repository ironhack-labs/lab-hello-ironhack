const Card = props => {

    return (
        <div className="card">
            <img src={props.icon} alt="card-icon"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>   
)
}

export default Card