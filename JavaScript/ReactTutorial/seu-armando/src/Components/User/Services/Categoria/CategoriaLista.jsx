/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TitleH2 from "../../../../Common/TitleH2";
import "./categoriaLista.css";

export default ( props ) => {

    
    return (
        <div className={ props.divClass } >

            <div className="row">
                <TitleH2 
                    title="Categorias:"
                    titleClass="titleClass"
                />

            </div>
            
            <div className="list-group">
                <a href="#" className="list-group-item active"> Categoria 1 </a>
                <a href="#" className="list-group-item"> Categoria 2 </a>
                <a href="#" className="list-group-item"> Categoria 3 </a>
                <a href="#" className="list-group-item"> Categoria 4 </a>

                
            </div>

        </div>
    )
}