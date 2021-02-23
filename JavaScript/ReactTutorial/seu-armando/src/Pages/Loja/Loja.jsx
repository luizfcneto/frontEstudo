import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import CategoriaLista from "../../Components/User/Services/Categoria/CategoriaLista";
import CardsProdutos from "../../Components/User/Services/Loja/CardsProdutos";
import SlideShow from "../../Common/SlideShow";
import Filter from "../../Common/Filter";

export default ( props ) => {
    return (
        <div className="loja all">
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <SlideShow />
                </div>

                <br />

                <div className="row">
                    <Filter 
                        divClass="col-xs-offset-3 col-xs-8 background"
                        inputPlaceHolder="Buscar Produto..."
                    />
                </div>               
                
                <div className="row">

                    <CategoriaLista 
                        divClass="col-xs-offset-1 col-xs-2 background"
                    /> 

                    <CardsProdutos 
                        divClass="col-xs-8 background"
                    />

                </div>                
            </div>
            <Footer />
        </div>   
    )
}