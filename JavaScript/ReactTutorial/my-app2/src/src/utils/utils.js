import React from "react";

// export function mapeiaFilhosPropsPai( props ){
//     return React.Children.map( props.children, filho => {
//         return React.cloneElement( filho, { ...props } );
//     } )
// }

// export const mapeiaFilhosPropsPai = ( props ) => {
//     return React.Children.map( props.children, ( filho ) => {
//         return React.cloneElement( filho, { ...props } );
//     } );
// }

export function mapeiaFilhosPropsPai( props ){
    return React.Children.map( props.children, function( filho ) {
        return React.cloneElement( filho, { ...props } );
    });
}