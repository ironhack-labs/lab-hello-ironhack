const USP = (props) => {
    const style = {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '10px'

    }

    return (
        <div style={style}>
            <img style={{height: '100px'}} src={props.img}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default USP