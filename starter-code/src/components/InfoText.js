import React from 'react'
const info = [['Declarative','React makes it painless to create interactive UIs.'],
['Components','Build encapsulated components that manage their state.'],
["Single-Way","A set of immutable values are passed to the component's."],
["JSX","Statically-typed, designed to run on modern browsers."]];
const img =['../images/icon1.png','../images/icon2.png','../images/icon3.png','../images/icon4.png']

class InfoText extends React.Component{
render(){
    return (
        <div>
            {info.map((info,index)=>{

                return(
                    <div class="cuadros">
                        <img src="{img[info]}"/>
                       <h3 class="info-title">{info[0]}</h3>
                        <p class="info-text">{info[1]}</p>
                    </div>
                )

            })}

        </div>
    )
}

}
export default InfoText