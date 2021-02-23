import React from "react";
import "./sobreTatuadores.css";

import Tatuador1 from "../../../../img/Tatuadores/tatuador1.jpg";


export default ( props ) => {
    return (
        <div className={ props.divClass } > 

            <div className="row background">

                <div className="col-xs-3 padding-left-0">

                    <img className="img-perfil" src={ Tatuador1 } alt="Foto Perfil tatuador" />
                
                    {/* Colocar Avaliações  */}
                </div> 
                
                <div className="col-xs-9">
                    <h3> Artista: <b> props.nome </b> </h3>

                    <p className=""> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not 
                        only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum. props.artistaDescription
                    </p>

                    {/* Colocar icones representando suas redes sociais */}
                    
                </div>

            </div>

            
            
            
        </div>
    )
}