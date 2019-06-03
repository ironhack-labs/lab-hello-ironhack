import React from 'react'

// Los componentes funcionales sólo retornan JSX, no tienen método render() ni pueden tener state
const User = props => <h2>Hey! Soy el usuario {props.firstName} {props.lastName}! Mola! Yabadú!</h2>

export default User