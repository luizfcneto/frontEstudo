import React from "react";

import Input from "./Input";

import "./filter.css";
import Button from "./Button";

export default ( props ) => {
    return ( 
        <div className={ props.divClass } > 
            <br/>
            <form className="form-group">
                <Input 
                    divClass="col-xs-4"
                    type="text"
                    inputClass="form-control"
                    name="busca"
                    placeHolder={ props.inputPlaceHolder }
                />

                <Button
                    divClass="col-xs-2"
                    aria-label="aria-label"
                    btnClass="btn gray"
                    value=" Pesquisar"
                    iconClass="glyphicon glyphicon-search"
                />
            
                {/* <Input
                    divClass="col-xs-3"
                    inputClass=""
                    type="checkbox"
                    name="maisVendido"
                    iconClass="glyphicon glyphicon-arrow-up"
                    spanValue="Mais Vendido"
                />

                <Input
                    divClass="col-xs-3"
                    inputClass=""
                    type="checkbox"
                    name="maiorPreco"
                    iconClass="glyphicon glyphicon-arrow-up"
                    spanValue="Maior Preço"
                    
                />

                <Input
                    divClass="col-xs-2"
                    inputClass=""
                    type="checkbox"
                    name="disponivel"
                    spanValue="Disponivel"
                /> */}


            </form>
            
        </div>
    )
}