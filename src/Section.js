import './Section.css'




const Section = (props) => {

    return (

        <section>

            <img src={props.link} alt="imagen" />
            <h3>
                {props.title}
            </h3>

            <p>{props.paragrahp}

            </p>


        </section>
    )
}




export default Section