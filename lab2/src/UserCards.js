import './UserCard.css'


const UserCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        <article className="user-card">

            <img src={props.image} alt="Imagen" />

            <br></br>

            <h5>{capitalize(props.title)}</h5>
            <p>{props.text}</p>



        </article>
    )
}

export default UserCard