import React from "react";
import "./perfil.css";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import Form from "../../../Components/User/Services/CadastrarUsuario/FormCadastro";
class Perfil extends React.Component{

    constructor( props ) {
        super( props );

        this.state = {
            usurio: {
                email: "",
                login: "",
                senha: "",
                confirmarSenha: "",
                dataNascimento: "",
                cpf: ""
            }
        }
    }

    render(){

        return(
            <div className="all">
                <Header logado="true"/>
                
                <div className="container-fluid perfilForm background">
                    <Form 
                        title="Perfil"
                        titleClass="titleClass"
                        btnValue="Alterar"
                        inputValues={ this.state }
                    />
                </div>
                <Footer />
            </div>
        
        )
    }
}

export default Perfil;