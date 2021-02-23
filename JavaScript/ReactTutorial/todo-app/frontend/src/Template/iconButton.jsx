import React from "react";

import If from "../Template/if";

// export default ( props ) => {

//     if( props.hidden ){
//         return null;
//     }else{
//         return (
//             <button className={ "btn " + props.style }>
//                 <i className={ props.icon }> </i>
//             </button>           
//         )
//     }
    
// }

//ou

// Componente Condicional
export default ( props ) => {

    return (
        <If test={ !props.hidden }>
            <button 
                className={ props.style }
                onClick={ props.onClick }    
            >
                <i className={ props.icon }> </i>
            </button>
        </If>
    )

}