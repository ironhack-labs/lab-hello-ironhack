import React from 'react'

const Card =() => {

    return (
        <div className="container">
            <div className="row">


                <div className= "col-md-3 card-article">
                    <article> 
                        <img src="../images/icon1.png" alt="logo"/>
                        <h1>Iván Romero</h1>
                        <h2>El Farlopero</h2>
                    </article>
                </div>

                <div className= "col-md-3 card-article">
                    <article> 
                        <img src="../images/icon2.png" alt="logo"/>
                        <h1>Carla</h1>
                        <h2>La de Parla</h2>
                    </article>
                </div>

                <div className= "col-md-3 card-article">
                     <article> 
                        <img src="../images/icon3.png" alt="logo"/>
                        <h1>Lucía</h1>
                        <h2>Sin Mercancía</h2>
                    </article>
                </div>

                <div className= "col-md-3 card-article">
                    <article> 
                        <img src="../images/icon4.png" alt="logo"/>
                        <h1>Teo</h1>
                        <h2>Macabeo</h2>
                    </article>
                 </div>
        
            </div>
        </div>
    )
}


export default Card


