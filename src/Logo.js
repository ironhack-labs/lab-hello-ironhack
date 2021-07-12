

const Logo = (props) => {

    return (

        <article>

            <img className="logo" src={props.image} alt="Logo" />

            <h5>{props.text}</h5>

            <p>{props.content}</p>

        </article>
    )
};

export default Logo;