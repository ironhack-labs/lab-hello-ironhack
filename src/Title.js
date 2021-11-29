import React from 'react'

const Title = (props) => {
  return (
    <>
        <h1>{props.titleText}</h1>
        <p>{props.paragraphText}</p>
    </>
  )
}

export default Title