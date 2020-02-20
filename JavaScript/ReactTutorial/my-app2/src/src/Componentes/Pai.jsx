import React from "react";
import Filho from "./Filho";

export default function ( props ){

    const sairParaOnde = ( lugar ) => {
        return alert( "Lugar: " + lugar );
    }

    return(
        <div> 
            <Filho sairParaOnde={ sairParaOnde } />
        </div>
    )
}


// Pai <- Filho ( props.sairParaOnde __calback ) -> sairParaOnde("Lugar" ) Pai