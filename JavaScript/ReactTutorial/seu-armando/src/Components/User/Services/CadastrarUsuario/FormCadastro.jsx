import React from "react";
import "./formCadastro.css";
import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";
import TitleH2 from "../../../../Common/TitleH2";

export default ( props ) => {
    
    return (
        <div className="formCadastro">
            <TitleH2 title={ props.title } titleClass={ props.titleClass } />
            <form className="form form-group background">
                <div className="row"> 
                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control" 
                        type="text" 
                        placeHolder="Email" 
                        value={ props.inputValues.email }
                        inputHandler={ props.inputHandler }
                    /> 
                    
                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control"
                        type="text"
                        placeHolder="Login"
                        value={ props.inputValues.login }
                        inputHandler={ props.inputHandler }
                    />                                 
                </div> 
                <br />
                <div className="row">
                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control"
                        type="password"
                        placeHolder="Senha"
                        value={ props.inputValues.senha }
                        inputHandler={ props.inputHandler }
                    />

                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control"
                        type="password"
                        placeHolder="Confirmar Senha"
                        value={ props.inputValues.confirmarSenha }
                        inputHandler={ props.inputHandler }
                    />
                </div>
                <br />
                <div className="row">
                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control"
                        type="date"
                        placeHolder="dataNascimento"
                        value={ props.inputValues.dataNascimento }
                        inputHandler={ props.inputHandler }
                    />

                    <Input 
                        divClass="col-xs-6"
                        inputClass="form-control"
                        type="text"
                        placeHolder="CPF"
                        value={ props.inputValues.cpf }
                        inputHandler={ props.inputHandler }
                    />

                </div> 
                <br />
                <div className="row">
                    <Button 
                        divClassBtn="col-xs-12 btn-cadastro"
                        btnClass="btn gray"
                        value={ props.btnValue }
                        add={ props.addCadastro }
                    />
                </div>
                
            </form>
        </div>
    )

}