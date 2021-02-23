import React from "react";

// Importando CSS:
import "./Display.css";


export default ( props ) => {
    return <div className="display"> { props.value } </div>
}