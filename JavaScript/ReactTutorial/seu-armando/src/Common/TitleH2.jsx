import React from "react";
import "./titleH2.css";

export default ( props ) => {
    return (
        <h2 className={ props.titleClass }> 
            { props.title } 
        </h2>
    )
}