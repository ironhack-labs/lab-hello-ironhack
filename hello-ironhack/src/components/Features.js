import React from 'react' 

const features = props => {
    return (
        <>
            <div>

                <img src={props.img} alt="Faile upload"></img>
                <h4>{props.title}</h4>
                <p>{props.text}</p> 

            </div>
            

        </>

    );
  }
   
export default features;