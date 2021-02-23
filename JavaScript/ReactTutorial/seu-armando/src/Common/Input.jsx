import React from "react";
import "./input.css";

export default ( props ) => {
    
    if( props.type === "file" ){
        return (
            <div className={ props.divClass }>
                <input 
                    className={ props.inputClass }
                    type={ props.type }
                    value={ props.value }
                    name={ props.name }
                    id={ props.id }
                    placeholder={ props.placeHolder }
                    onChange={ props.inputHandler }
                    multiple
                />
            </div>
        )

    } if( props.contadorProduto ) {
        return(
            <div className={ props.divClass }>
                <span className="input-group-addon" />
                <input className="form-control" type="text" />
                <span classname="input-group-addon" />
            </div>
        )
    
    }else{
        return (
            <div className={ props.divClass }>
                <input 
                    className={ props.inputClass }
                    type={ props.type }
                    value={ props.value }
                    name={ props.name }
                    placeholder={ props.placeHolder }
                    onChange={ props.inputHandler }
                    
                />
                <span className={ props.iconClass } >
                    { props.spanValue }
                </span>
            </div>
        )
    }
}