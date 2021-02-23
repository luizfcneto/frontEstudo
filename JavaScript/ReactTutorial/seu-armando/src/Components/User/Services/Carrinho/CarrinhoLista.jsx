import React from "react";
import "./carrinhoLista.css";


import CarrinhoElemento from "./CarrinhoElemento";

export default ( props ) => {
    
    return (
        <div className={ props.divClass }>
            <p> <b> Lista de produtos inseridos no carrinho: </b> </p>

            <ul className="list-group">
                <li className="list-group-item"> 
                    <div className="row">
                        <CarrinhoElemento /> 
                    </div>
                </li>

                <li className="list-group-item"> 
                    <div className="row">
                        <CarrinhoElemento /> 
                    </div>
                </li>

                <li className="list-group-item"> 
                    <div className="row">
                        <CarrinhoElemento /> 
                    </div>
                </li>
                
                
                <li className="list-group-item"> 
                    <div className="row">
                        <CarrinhoElemento /> 
                    </div>
                </li>
                
                <li className="list-group-item"> 
                    <div className="row">
                        <CarrinhoElemento /> 
                    </div>  
                </li>
            </ul>
        </div>
    )
}