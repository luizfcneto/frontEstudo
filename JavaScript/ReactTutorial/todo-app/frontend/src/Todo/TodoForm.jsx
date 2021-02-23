import React from "react";

import GridCss from "../Template/grid";
import IconButton from "../Template/iconButton";

export default ( props ) => {

    // Função que reconhece teclas clicadas para associar a adicionar tarefa, e limpar
    const keyHandler = ( e ) => {
        if( e.key === "Enter" ){
            console.log( e.key )
            if( e.shiftKey === true ){
                props.handleSearch() 
            }else{
                props.handleAddEvent()
            }
        }else if( e.key === "Escape" ) {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <GridCss cols="12 9 10">
                <input 
                    id="description" 
                    className="form-control"
                    placeholder="Adicione uma tarefa..." 
                    onChange={ props.handleChange }
                    
                    //Adicionamos o manipulador de tecla no input
                    onKeyUp={ keyHandler }
                    value={ props.description }
                />
            </GridCss>

            <GridCss cols="12 3 2">
                <IconButton 
                    style="btn btn-primary" 
                    icon="fa fa-plus" 
                    onClick={ props.handleAddEvent } 
                />

                <IconButton
                    style="btn btn-info"
                    icon="fa fa-search"
                    onClick={ props.handleSearch }
                >
                </IconButton>

                <IconButton
                    style="btn btn-default"
                    icon="fa fa-eraser" 
                    onClick={ props.handleClear }
                >
                </IconButton>
            </GridCss>

        </div>
    )
}