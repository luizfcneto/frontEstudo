import React from "react";
import Input from "../../../../Common/Input";
import Button from "../../../../Common/Button";
import TitleH2 from "../../../../Common/TitleH2";
import "./formSolicitarOrcamento.css";


export default ( props ) => {
    return (
        <div className="solicitar container background" >
            <TitleH2 title={ props.title } titleClass={ props.titleClass } />
        
            <form className="form form-group background">
                <div className="row">
                    <div className="col-sx-12">
                        <label htmlFor="descricao" className="left-problem"> Descrição do Orçamento: </label>
                        <br/>
                        <div className="left-problem">
                            <textarea
                                name="descricao" 
                                rows="5" 
                                cols="90"
                                className="input-group"
                                placeholder="Descreva a localização da tatuagem [ parte do corpo ]; 
                                - tamanho[ medidas ]; 
                                - caso não tenha imagem... tente descrever qual a sua ideia."
                                onChange={ props.inputHandler }
                            />
                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <p className="left-problem"> Nos Envie o seu protótipo: </p>
                    <div className="left-problem">
                        <Input 
                            type="file"
                            name="orcamento"
                            inputClass="input-group"
                            inputHandler={ props.inputHandler }
                            
                        />
                    </div>
                
                </div>

                <div className="row">
                    <Button 
                        divClassBtn="col-xs-12 btn-solicita" 
                        btnClass="btn gray"
                        value="Solicitar Orçamento"
                        // onClick={ props.listener }
                    />
                </div>


            </form>
        </div>
    )
}