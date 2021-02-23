import React from "react";

// Componente condicional
export default ( props ) => {
    if( props.test ){
        return props.children;
    }else{
        return false;
    }
}