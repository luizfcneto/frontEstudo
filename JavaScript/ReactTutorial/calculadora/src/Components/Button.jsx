import React from "react";

// Importando CSS:
import "./Button.css";

// Dica: Evitar muitos componentes com states, utilizar mais componentes com funções

// export default ( props ) => {
//     return ( 
//         <button className={ `
//         button 
//         ${props.operation ? "operation" : "" } 
//         ${props.double ? "double" : "" }
//         ${props.triple ? "triple" : "" }
//         ` }> 
//             { props.label } 
//         </button>
//     ) 
// }

//ou

export default ( props ) => {
    let classes = "button ";
    classes += props.operation ? "operation" : "";
    classes += props.double ? "double" : "";
    classes += props.triple ? "triple" : "";

    return (
        <button onClick={ ( e ) => props.click && props.click( props.label ) }  className={ classes }> 
            { props.label } 
        </button>
    )
}


//props.label pode ser substituido por e.target.innerHTML