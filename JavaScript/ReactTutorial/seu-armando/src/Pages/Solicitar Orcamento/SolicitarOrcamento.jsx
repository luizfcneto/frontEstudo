import React from "react";
import Header from "../../Common/Header";
import FormSolicitarOrcamento from "../../Components/User/Services/SolicitarOrcamento/FormSolicitarOrcamento"
import Footer from "../../Common/Footer";

import "./solicitarOrcamento.css";

class SolicitarOrcamento extends React.Component{

    constructor( props ){
        super( props );
        
        this.state = {
            descricaoOrcamento: "",
            arquivosEnviados: []
        }

        this.inputHandler = this.inputHandler.bind( this );

    }

    // capta alterações nos inputs e atribui a respectivel variavel no state
    inputHandler( event ){
        console.log( "Alterado", event.target );


        if( event.target.type === "textarea" ){
            // ...

        }else if( event.target.type === "file" ){
            // ...Descobrir como captar um arquivo de imagem

        }else{
            console.log( "DESCONHECIDO" );
        }

    }


    render(){
        return(
            <div className="all"> 
                <Header />
                <div className="container-fluid">
                    <FormSolicitarOrcamento 
                        title="Solicitar Orçamento:"
                        titleClass="titleClass"
                        inputHandler={ this.inputHandler }
                    />
                    <br/>
                
                </div>   
                
                <Footer />
            </div>
        )
    }



}

export default SolicitarOrcamento;