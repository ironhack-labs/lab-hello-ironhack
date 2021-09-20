

const Card = (props) => {

    const {src, alt, title, description} = props


    return (
        <div>
         <img src={src} alt={alt} />
                <h2>{title}</h2>
                <p>{description}</p>
        </div>
    )
}

export default Card