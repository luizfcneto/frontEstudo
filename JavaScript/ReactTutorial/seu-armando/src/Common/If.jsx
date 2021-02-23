// import React from "react";

// componente funcional de condição
export default ( props ) => {
    
    if( props.condicional === "true" ) {
        return props.children;
    }else{
        return false;
    }

}