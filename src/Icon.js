

const Icon = props => {

    return (
        <>
            <img src={props.image} alt="Imagen" />
            <h2>{props.text}</h2>
            <h3>{props.subText}</h3>
        </>
    )
}

export default Icon