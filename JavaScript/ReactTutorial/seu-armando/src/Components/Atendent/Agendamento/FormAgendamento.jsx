import React from "react";
import "./formAgendamento.css"

import TitleH2 from "../../../Common/TitleH2";
import Input from "../../../Common/Input";
import Sessao from "./Sessao";
import Visita from "./Visita";
import If from "../../../Common/If";

export default ( props ) => {

    return (   
        <div className={ props.divClass }>
            
            <TitleH2 
                title="Agendamento:"
                titleClass="titleClass"
            />
            <form className="form form-group background">

                {/* Colocar radio para verificar se é visita ou sessão */}
                <div className="row">     
                    <div className="col-xs-offset-4 col-xs-2">
                        <Input 
                            divClass="col-xs-offset-1 radio"
                            type="radio"
                            value="sessao"
                            id="sessao"
                            name="tipo_agendamento"
                        />
                        <div className="col-xs-offset-1">
                            <label htmlFor="sessao"> Sessão </label>
                        </div>

                    </div>

                    <div className="col-xs-offset-1 col-xs-2">
                        <Input 
                            divClass="col-xs-offset-1 radio"
                            type="radio"
                            value="visita"
                            name="tipo_agendamento"
                            id="visita"
                        />
                        <div className="col-xs-offset-1">
                            <label htmlFor="visita"> Visita </label>
                        </div>

                    </div>

                </div>
                <br/>

                {/* Caso seja Sessão vai ter um outro checkbox com tatuadores */}
                <If condicional="false">
                    < Sessao />
                </If>

                <If condicional="true">
                    < Visita />
                </If>

            </form>
            
       
        </div>
    )
}