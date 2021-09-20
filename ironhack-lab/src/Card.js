import "./Card.css"

function Card (props) {

    const {image, title, description} = props

    return (

        <section className="card">
            <img src={image} alt="card-illustration" />
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )

}

export default Card