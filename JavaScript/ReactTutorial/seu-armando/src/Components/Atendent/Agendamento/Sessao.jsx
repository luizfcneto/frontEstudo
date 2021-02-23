import React from "react";

import Input from "../../../Common/Input";
import Button from "../../../Common/Button";

export default ( props ) => {
    return (
        <div className="background">
                <div className="row">
            
                    <div className="col-xs-1">
                        <label htmlFor="data"> Data: </label>
                    </div>
                    <Input 
                        divClass="col-xs-offset-1 col-xs-7 col-xs-offset-3"
                        inputClass="form-control"
                        type="date"
                        
                    />

                </div>
                <br/>
                <div className="row">

                    <div className="col-xs-1">
                        <label htmlFor="horaInicio" > Horário Inicio: </label>  
                    </div>
                    
                    <Input
                        divClass="col-xs-offset-1 col-xs-4 col-xs-offset-5"
                        inputClass="form-control"
                        type="time"
                    />
                </div>
                
                <br/>

                <div className="row">
                        <div className="col-xs-1">
                            <label htmlFor="horaFim" > Horário Fim: </label>    
                        </div>
                        
                        <Input 
                            divClass="col-xs-offset-1 col-xs-4"
                            inputClass="form-control"
                            type="time"
                        />
                </div>
                
                <br/>
                
                <div className="row">
                    <Button 
                        divClassBtn="col-xs-12 btn-agenda"
                        btnClass="btn gray"
                        value="Agendar" 
                    />
                </div>
            </div>
    )
}