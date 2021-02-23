import React from "react";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import CarrinhoLista from "../../../Components/User/Services/Carrinho/CarrinhoLista";
import Aside from "../../Index/Aside";
import Button from "../../../Common/Button";
import Title from "../../../Common/TitleH2";

import "./carrinho.css";


class Carrinho extends React.Component{

    render(){
        return(
            <div className="carrinho all"> 
                <Header logado="true"/>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-offset-1 col-xs-7 background">
                            <Title
                                titleClass="titleClass"
                                title="Meu Carrinho"         
                            
                            />
                            
                            <div className="row">
                                <CarrinhoLista 
                                    divClass="carrinhoLista col-xs-11"
                                
                                />
                            </div>
                        
                            <div className="row painel">
                                <div className="col-xs-1">
                                    <p> <b> Preço Total: </b> </p>
                                    
                                </div>

                                <div className="col-xs-2">
                                    <input type="number" className="form-control text-central" />
                                </div>

                                <div className="col-xs-offset-1 col-xs-1">
                                    <p> <b> CEP: </b> </p>
                                    
                                </div>

                                <div className="col-xs-3">
                                    <input type="number" className="form-control text-central" />
                                </div>
                            </div>
                            
                            <div className="row painel">
                                <div className="col-xs-1">
                                    <p> <b> Frete: </b> </p>
                                    
                                </div>

                                <div className="col-xs-2">
                                    <input type="text" className="form-control text-central" />
                                </div>

                                <div className="col-xs-offset-1 col-xs-2">
                                    <span><b> Desconto: </b> </span>
                                </div>

                                <div className="col-xs-2">
                                    <input type="number" className="form-control text-central" />
                                </div>
                            </div>

                            <div className="row painel">
                                <div className="col-xs-1">
                                    <p> <b> Preço Final: </b> </p>
                                    
                                </div>

                                <div className="col-xs-2">
                                    <input type="number" className="form-control text-central" />
                                </div>
                            </div>

                            <div className="row">
                                <Button 
                                    divClassBtn="col-xs-12 btn-center"
                                    btnClass="btn gray"
                                    value="Confirmar Compra"
                                />
                                
                            </div>
                            
                            <br />
                        </div>

                        <Aside
                            divClass="col-xs-offset-1 col-xs-3 aside"
                        />

                    </div>

                </div>
                <Footer />
            </div>
        )
    }

}

export default Carrinho;