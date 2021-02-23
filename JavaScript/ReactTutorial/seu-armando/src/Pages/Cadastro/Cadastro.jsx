import React from "react";
import "./cadastro.css";
import Header from "../../Common/Header";
import FormCadastro from "../../Components/User/Services/CadastrarUsuario/FormCadastro";
import TabelaCadastro from "../../Components/User/Services/CadastrarUsuario/TabelaCadastro";
import Footer from "../../Common/Footer";

const emptyUser = {
    email: "",
    login: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    cpf: ""
}

class Cadastro extends React.Component {

    constructor( props ){
        super( props );

        this.state = {
            // Como definir um estado de um array de objetos? 
            //R: Estruturar o objeto, declarar um array vazio, inserir objetos nesse array.
            
            usuario: emptyUser,
            listaUsuarios: []
            
        }

        this.inputHandler = this.inputHandler.bind( this );
        this.addCadastro = this.addCadastro.bind( this );
        this.clearUsuario = this.clearUsuario.bind( this );
    }

    encrypt( password ) {
        let pass = password;
        let ans = [];
        for( let i = 0; i < pass.length; i++ ){
            ans.push( "*" );
        }
        ans = ans.join("");
        return ans;
    }

    // Função que escuta inputs
    inputHandler( event ) {
        // console.log( "input alterado em:", event.target.placeholder );
        // console.log( event.target.value );

        switch( event.target.placeholder ){
            case "Email":
               
                this.setState( {
                    ...this.state,
                    usuario: {
                        ...this.state.usuario,
                        email: event.target.value
                    }
                } );
                break;
            
            case "Login":
                    
                this.setState( {
                    usuario: {
                        ...this.state.usuario,
                        login: event.target.value
                    }
                } );
                break;
            
            case "Senha":
                let password = this.encrypt( event.target.value );
                
                this.setState( {
                    usuario: {
                        ...this.state.usuario,
                        senha: password 
                    }
                } );
                break;

            case "Confirmar Senha":
                let confirmPassword = this.encrypt( event.target.value );
                
                this.setState( {
                    usuario: {
                        ...this.state.usuario,
                        confirmarSenha: confirmPassword 
                    }
                } );
                break;

            case "dataNascimento":
                
                this.setState( { 
                    ...this.state,
                    usuario: {
                        ...this.state.usuario,
                        dataNascimento: event.target.value
                    }
                } )
                break;

            case "CPF":

                this.setState( {
                    ...this.state,
                    usuario: {
                        ...this.state.usuario,
                        cpf: event.target.value
                    }
                } )
                break;

            default:
                console.log( "placeHolder invalido", event.target.placeholder );

        }
    }

    clearUsuario(){

        this.setState( {
            ...this.state,
            usuario: emptyUser
        } );
        // console.log( "Clear Usuario: ", this.state );
    }

    //Funcao de adicionar campos do formulario para cadastro:
    addCadastro() {
        console.log( "Adicionando usuario novo" );

        let usuario = this.state.usuario;
        if( usuario.email !== null || usuario.login !== null || usuario.senha !== null ){
            let lista = this.state.listaUsuarios;
            lista.push( usuario );

            this.setState( { 
                ...this.state,
                listaUsuarios: lista
            } );
            this.clearUsuario();
            console.log( this.state );

        }else{
            console.log( "Não foi possivel adicionar, campos obrigatórios não preenchidos" );
            this.clearUsuario();
        }
    
    }

    render(){

        let users = this.state.listaUsuarios.length;
        return(
            <div className="all">
                <Header />
                <div className="cadastro container background">
                    
                    <FormCadastro 
                        title="Cadastro"
                        titleClass="titleClass"
                        inputHandler={ this.inputHandler } 
                        addCadastro={ this.addCadastro }   
                        btnValue="Cadastrar"
                        inputValues={ this.state.usuario }
                    /> 
  
                </div>
                <br/>

                <div className={ users ? "tabela container" : "tabela container toggled" }>
                {/* <div className="tabela container "> */}
                    <TabelaCadastro 
                        listaUsuarios={ this.state.listaUsuarios }
                        
                    /> 
                </div>
                <Footer />
            </div>  
            
        )
    }

}

export default Cadastro;