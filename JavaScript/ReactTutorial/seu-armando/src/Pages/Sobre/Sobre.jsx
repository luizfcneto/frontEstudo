import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import TitleH2 from "../../Common/TitleH2";

import "./sobre.css";
import SobreTatuadores from "../../Components/User/Services/Sobre/SobreTatuadores";

export default ( props ) => {
    return (
        <div className="all">
            <Header />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-10 col-xs-offset-1 background">
                        <TitleH2 
                            titleClass="titleClass"
                            title="Sobre Nós"
                        />

                        <div className="row">
                            <div className="col-xs-12">
                                <iframe 
                                    className="iframe-localizacao"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.087218046304!2d-43.195558049936494!3d-22.98382004632767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd53d8e02d663%3A0xdd11b2b0a954b540!2sKing7%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1585868542760!5m2!1spt-BR!2sbr" 
                                    frameBorder="0"  
                                    allowFullScreen="" 
                                    ariaHidden="false" 
                                    tabIndex="0">

                                </iframe>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <p className="padding-left-10 align-center">
                                    Telefone: <b> (21) 12345-1234 </b>
                                </p>

                                <p className="padding-left-10 align-center"> 
                                    Endereço: 
                                    <b> Rua Francisco Sá, 95 - Copacabana, Rio de Janeiro - RJ </b>
 
                                </p>

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <h3 className="padding-left-10"> 
                                    Tópico I 
                                </h3>
                                
                                <p className="padding-left-10"> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker 
                                    including versions of Lorem Ipsum.
                                </p>

                                <h3 className="padding-left-10">
                                    Topico II 
                                </h3>
                                
                                <p className="padding-left-10"> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker 
                                    including versions of Lorem Ipsum.
                                </p>
                                
                            </div>
                        </div>

                    </div>
                
                </div>

                <br />

                <div className="row">
                    <SobreTatuadores
                        divClass="col-xs-offset-1 col-xs-10"
                    />
                </div>
                
                <br/>

                <div className="row">
                    <SobreTatuadores
                        divClass="col-xs-offset-1 col-xs-10"
                    />
                </div>
                
                <br />

                <div className="row">
                    <SobreTatuadores
                        divClass="col-xs-offset-1 col-xs-10"
                    />
                </div>
                
                <br /> 

                <div className="row">
                    <SobreTatuadores
                        divClass="col-xs-offset-1 col-xs-10"
                    />
                </div>
               
            </div>
                        
            <Footer />
        </div>
    )
}