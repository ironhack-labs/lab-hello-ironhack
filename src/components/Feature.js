import "./Feature.css";

export default function Feature (props) {
    const header = [
        "Declarative",
        "Components",
        "Single-Way",
        "JSX"
    ]

    const par = [
        "React makes it painless to create interactive UI's.",
        "Build encapsulated components that manage their state.",
        "A set of immutable values arepassed to the components.",
        "Statically-typed, designed to run on modern browsers."
    ]

    return <div className = "eachUnit">

            <img  className = "divImage" src = {props.imageUrl} alt = ""/>
            <h2 className = "divHeader">{header[props.arrIndex]}</h2>
            <p className = "divPar">{par[props.arrIndex]}</p>
       

    </div>
}
