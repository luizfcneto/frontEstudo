import React from "react";

import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import MenuDash from "../../Components/Admin/Services/MenuDashBoard/MenuDash";

import MeusFuncionarios from "../../Components/Admin/Services/MeusFuncionarios/MeusFuncionarios";
import MinhasCategorias from "../../Components/Admin/Services/MinhasCategorias/MinhasCategorias";
import MeusProdutos from "../../Components/Admin/Services/MeusProdutos/MeusProdutos";

export default ( props ) => {

    return (
        <div className="all">
            <Header 
                logado="true"
            />
            
            <div className="container">
                <div className="row">
                    <MenuDash 
                        admin="true"
                    />
                </div>

                <div className="row">

                    {/* <MeusFuncionarios /> */}
                    <MeusFuncionarios />
                    {/* ou */}

                    {/* Minhas Categorias /> */}
                    <MinhasCategorias />

                    {/* ou */}

                    {/* Meus Produtos /> */}
                    <MeusProdutos />
                    {/* ou */}

                    {/* Meus Agendamentos /> */}
                    
                </div>
            </div>
            


            <Footer />
        </div>
    )
}