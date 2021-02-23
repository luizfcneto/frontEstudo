import React from "react";

import "./carrinhoElemento.css";

import Button from "../../../../Common/Button";

// Importando imagens para exemplificar produtos:
import produto1 from "../../../../img/fake-imgs/tattoo1.jpg";
import produto2 from "../../../../img/fake-imgs/tattoo2.jpg";
// import produto3 from "../../../../img/fake-imgs/tattoo3.jpg";
// import produto4 from "../../../../img/fake-imgs/tattoo4.jpg";
// import produto5 from "../../../../img/fake-imgs/tattoo5.jpg";
// import produto6 from "../../../../img/fake-imgs/tattoo6.jpg";
// import produto7 from "../../../../img/fake-imgs/tattoo7.jpg";
// import produto8 from "../../../../img/fake-imgs/tattoo8.jpg";
// import produto9 from "../../../../img/fake-imgs/tattoo9.jpg";


export default ( props ) => {
    return (
        <div className="col-xs-12" > 

            <div className="col-xs-1 img-content">
                <img className="img-element-carrinho" src={ produto1 } alt="produto1" />
            </div>

            <div className="col-xs-5">
                <span> <b> Nome do Produto: </b> Produto 1 </span>
                <span> <b> quantidade: </b> X </span> 
                <br/>
                <span> <b> preço: </b> X,00 </span>
            </div>

            <Button 
                divClassBtn="col-xs-offset-5 col-xs-1"
                btnClass="btn btn-danger"
                iconClass="glyphicon glyphicon-trash"
                ariaHidden="aria-hidden"
            />
            



        </div>
    )
}