import React from "react";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";

class ResponderOrcamento extends React.Component{

    render() {
        return (
            <div className="all">
                <Header
                    logado="true"
                    atendente="true"
                />

                <div className="container-fluid">
                    
                    <div className="col-xs-offset-1 col-xs-10 col-xs-offset-1 background">
                        <h3> Responder Orçamento: </h3> 


                    </div>
                    
                </div>

                <Footer />
            </div>
        )
    }


}

export default ResponderOrcamento;
