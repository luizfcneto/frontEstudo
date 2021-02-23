import React from "react";
import "./thumbnail.css";
import Button from "./Button";

export default ( props ) => {

    if( props.thumbnailTitle === undefined && props.thumbnailDescription === undefined ){
        
        // Thumbnail sem descrição e titulos, utilizada para propagandas
        return(
            <div className="thumbnail">
                <img className="img-fluid" src={ props.imgSrc } alt={ props.imgAlt } />
                
            </div>
        )

    } else if( props.type === "produto" ){

        // Thumbnail com links, imagens, descrição, titulo, botões 
        return(
            <div className="thumbnail">
                { console.log( props.srcImg ) }
                <a href="/produto" target="_blank">
                    <img className="img-fluid" src={ props.imgSrc } alt={ props.imgAlt } />
                </a>
    
                <div className="caption"> 
                    <h3> { props.thumbnailTitle } </h3>
                    <p> { props.thumbnailDescription } </p>
                    
                    <hr />
                    <form className="form-group">
                        <div className="row">
                            <div className="col-xs-offset-2 col-xs-8 col-xs-offset-2 background input-group">
                                <span className="input-group-addon glyphicon glyphicon-plus" />                            
                                <input className="form-control text-central" type="text" placeholder="Quantidade" defaultValue="1"/>
                                <span className="input-group-addon glyphicon glyphicon-minus" />
                            </div>
                        </div>
                        <br />
                        <div className="row thumbnail-button-center">
                            
                            <Button 
                                divClassBtn="col-xs-12"
                                btnClass="btn gray "
                                value="Adicionar ao Carrinho"

                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {

        // Thumbnail com imagens sem link
        return(
            <div className="thumbnail">
                { console.log( props.srcImg ) }
                <img className="img-fluid" src={ props.imgSrc } alt={ props.imgAlt } />
    
                <div className="caption"> 
                    <h3> { props.thumbnailTitle } </h3>
                    <p> { props.thumbnailDescription } </p>
                    
                </div>
            </div>
        )
    }
    
}