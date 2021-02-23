import React from "react";
import "./menuDash.css";

export default ( props ) => {
    return (
        <div className={ props.divClass } >
            
            {/* Meus Funcionarios */}
            <div id="element" className="col-xs-offset-2 col-xs-2">
                <a className="menu-element" href="#meus-funcionarios" target="_self" >
                    Meus Funcionários
                </a>

            </div>

            {/* Minhas Categorias */}
            <div id="element" className="col-xs-2">
                <a className="menu-element" href="#minhas-categorias" target="_self">
                    Minhas Categorias
                </a>
            </div>
            
            {/* Meus Protudos */}
            <div id="element" className="col-xs-2">
                <a className="menu-element" href="#meus-produtos" target="_self">
                    Meus Produtos
                </a>
            </div>

            {/* Horários */}
            <div id="element" className="col-xs-2 ">
                <a className="menu-element" href="#meus-agendamentos" target="_self">
                    Meus Agendamntos
                </a>
            </div>

        </div>
    )
}