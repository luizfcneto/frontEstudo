import React from "react";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import TitleH2 from "../../../Common/TitleH2";

import "./produto.css";

//Importando imagens do produto.
import produto1 from "../../../img/fake-imgs/tattoo1.jpg";
import produto2 from "../../../img/fake-imgs/tattoo2.jpg";
import Button from "../../../Common/Button";

export default ( props ) => {
    return (
        <div className="produto all">
            <Header />

            <div className="container-fluid">
                
                <div className="row">

                    <div className="col-xs-offset-1 col-xs-10 background">
                        
                        {/* Nome do produto */}
                        <TitleH2 
                            titleClass="titleClass"
                            title="Nome do Produto Específico"
                        />
                        
                        
                        <div className="row">

                            {/* Imagem */}
                            <div className="col-xs-3">
                                <img id="img-principal" src={ produto1 } className="img-produto" alt="Imagem do Produto" />
                            
                            </div>
                            

                            {/* Descrição do produto */}
                            <div className="col-xs-8">

                                <br />

                                <p> 
                                    <b>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with 
                                    the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker 
                                    including versions of Lorem Ipsum. 
                                    </b>
                                </p>
                            </div>

                        </div>                   

                        <br />
                        
                        <div className="row">

                            {/* Outras pequenas imagens do produto */}
                            <div className="col-xs-3 lista-imagens-produto">
                                <img src={ produto2 } className="img-produto-lista" alt="Imagem do Produto" />
                                <img src={ produto2 } className="img-produto-lista" alt="Imagem do Produto" />
                                <img src={ produto2 } className="img-produto-lista" alt="Imagem do Produto" />
                                <img src={ produto2 } className="img-produto-lista" alt="Imagem do Produto" />

                            </div>

                            {/* Quantidade em estoque */}
                            <div className="col-xs-3">
                                <span>
                                    <span className="glyphicon glyphicon-equalizer" />
                                    <b> Estoque: props.estoque </b>
                                </span>
                    
                            </div>


                            {/* Preço */}
                            <div className="col-xs-3">
                                <span>
                                    <span className="glyphicon glyphicon-usd" />
                                    <b> Preço: props.preço </b> 
                                </span>

                            </div>

                        </div>

                        <br />
                        <div className="row">

                            {/* Input com botões para adicionar ao carrinho */}
                            <div className="col-xs-3 input-group teste">
                                <span className="input-group-addon glyphicon glyphicon-plus" />                            
                                <input className="form-control text-central" type="text" placeholder="Quantidade" defaultValue="1"/>
                                <span className="input-group-addon glyphicon glyphicon-minus" />
                            </div>

                        </div>

                        <br />

                        {/* Botão de adicionar ao carrinho */}
                        <div className="row btn-center">
                            <Button 
                                divClassBtn="col-xs-12"
                                btnClass="btn gray"
                                value="Adicionar ao Carrinho"

                            />
                        </div>
                    
                        <br />
                    </div>    

                </div>

            </div>

            <Footer />
        </div>
    )
}