import './ReactLogo.css'
import reactLogo from './react-logo.svg'

const ReactLogo = props => {
    console.log(props)

    return (

        <>
            <img className='positionRelative' src={reactLogo} alt="Logotipo" style={{ width: props.size }} />
        </>
    )
}

export default ReactLogo

