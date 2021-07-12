const Icon = props => {
    return (
        <article className='icon'>
            <img src={props.icon} alt="Icon"></img>
            <br></br>
            <h3>{props.name}</h3>
            <p className="p-black">{props.text}</p>
        </article>
    )
}
export default Icon