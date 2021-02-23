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
                title="Meus Funcionários"
            />

            <div className="row">
                <Button 
                    divClassBtn="col-xs-offset-1 col-xs-11"
                    btnClass="btn btn-primary"
                    value="Adicionar Novo Funcionário"
                />
            </div>

            <div className="row">
                <Filter 
                    divClass="col-xs-offset-1 col-xs-11"
                    inputPlaceHolder="Buscar Funcionário..."
                />
            </div>

            
            <div className="row">
                <List 
                    listTitle="Meus Funcionários:"
                    divClass="col-xs-offset-1 col-xs-10"

                />
            </div>
            

        </div>
    )
}