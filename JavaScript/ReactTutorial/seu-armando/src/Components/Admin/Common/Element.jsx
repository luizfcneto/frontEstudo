import React from "react";

import "./element.css";

//Importando Imagens Mockado
import funcionario1 from "../../../img/fake-imgs/tattoo1.jpg";
import Button from "../../../Common/Button";
// import funcionario2 from "../../../../img/fake-imgs/tattoo2.jpg";
// import produto3 from "../../../../img/fake-imgs/tattoo3.jpg";
// import produto4 from "../../../../img/fake-imgs/tattoo4.jpg";
// import produto5 from "../../../../img/fake-imgs/tattoo5.jpg";
// import produto6 from "../../../../img/fake-imgs/tattoo6.jpg";
// import produto7 from "../../../../img/fake-imgs/tattoo7.jpg";
// import produto8 from "../../../../img/fake-imgs/tattoo8.jpg";
// import produto9 from "../../../../img/fake-imgs/tattoo9.jpg";

export default ( props ) => {
    return (
        <div className={ props.divClass } >
            
            <div className="col-xs-1 img-content">
                <img className="img-element-list" src={ funcionario1 } alt="Foto Funcionario 1" />
            </div>

            
            <div className="col-xs-5">
                <span> <b> Nome do Funcionario: </b> Funcionario 1 </span> 
                <br />
                <span> <b> Serviço: </b> Atendente </span> 
                <br/>
                <span> <b> Salário: </b> X,00 </span>
                <br />
                <span> <b> Começou em: </b> dd/MM/AAAA </span>
            </div>

            <Button 
                divClassBtn="col-xs-offset-5 col-xs-1"
                btnClass="btn btn-danger"
                iconClass="glyphicon glyphicon-trash"
                ariaHidden="aria-hidden"
            />


            <Button 
                divClassBtn="col-xs-offset-5 col-xs-1"
                btnClass="btn btn-warning"
                iconClass="glyphicon glyphicon-pencil"
                ariaHidden="aria-hidden"
            />
            

        </div>
    )
}