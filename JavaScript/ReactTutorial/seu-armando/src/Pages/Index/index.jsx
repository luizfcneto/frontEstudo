import React from "react";
import "./index.css";

import Header from "../../Common/Header";
import Article from "./Article";
import Aside from "./Aside";
import Footer from "../../Common/Footer";
import SlideShow from "../../Common/SlideShow";

export default ( props ) => {
    return (
        <div className="all">
            <Header />
            
            <div className="container-fluid">
                
                <div className="title">
                    <h2> Estudio do Seu Armando </h2>
                </div>
                
                <div className="row">
                    <SlideShow />
                </div>

                <br/>  
                
                <div className="row">     
                    <Article 
                        divClass="col-xs-offset-1 col-xs-8 article"
                    />
                    
                    <Aside 
                        divClass="col-xs-offset-1 col-xs-2 aside"    
                    />

                </div>

            </div>

            <Footer />

        </div>
    )
}