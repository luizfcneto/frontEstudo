import React from "react";

import TitleH2 from "../../../../Common/TitleH2";
import Button from "../../../../Common/Button";
import Filter from "../../../../Common/Filter";
import List from "../../Common/List";

export default ( props ) => {
    return (
        <div className="background">
            <TitleH2 
                titleClass="titleClass"
                title="Minhas Categorias"
            />

            <div className="row">
                <Button 
                    divClassBtn="col-xs-offset-1 col-xs-11"
                    btnClass="btn btn-primary"
                    value="Adicionar Nova Categoria"
                />
            </div>

            <div className="row">
                <Filter 
                    divClass="col-xs-offset-1 col-xs-11"
                    inputPlaceHolder="Buscar Categoria..."
                />
            </div>

            
            <div className="row">
                <List 
                    listTitle="Minhas Categorias:"
                    divClass="col-xs-offset-1 col-xs-10"


                />
            </div>
        </div>
    )
}