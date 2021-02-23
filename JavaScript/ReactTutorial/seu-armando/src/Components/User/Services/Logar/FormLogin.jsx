import React from "react";
import TitleH2 from "../../../../Common/TitleH2";
import Input from "../../../../Common/Input";
import Button from "../../../../Common/Button";

import "./formLogin.css";

export default ( props ) => {
    return (
        <div className="formLogin container background">
            <TitleH2 titleClass="titleClass" title="Formulário Login "/> 
            <div className="row">
                
                <Input 
                    type="text"
                    placeHolder="Email/Login"
                    inputClass="form-control"
                    divClass="col-xs-12 offset-md-3"
                />
            </div>
            <br/>
            <div className="row">
                <Input
                    type="password"
                    placeHolder="Senha"
                    inputClass="form-control"
                    divClass="col-xs-12 offset-md-3"
                />

            </div>

            <div className="row">
                <Button 
                    btnClass="btn btn gray"
                    value="Logar"
                    divClassBtn="btn-login"
                />
            </div>


        </div>
    )
}