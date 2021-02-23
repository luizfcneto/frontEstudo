import React from "react";
import "./calendario.css";
import TitleH2 from "../../../../Common/TitleH2";

import If from "../../../../Common/If";
import CalendarioMes from "./CalendarioMes";
import CalendarioSemana from "./CalendarioSemana";

class Calendario extends React.Component{



    render(){
        return(
            <div className={ this.props.divClass }> 
                <TitleH2 
                    title="Agenda:"
                    titleClass="titleClass"
                />

                <div className="row">
                
                    {/* Verificar se CalendarioMes ou CalendarioSemana */}
                    <If condicional="true">
                        <CalendarioMes />

                    </If>

                    <If condicional="true">
                        <CalendarioSemana />
                    </If>

                </div>
            </div>
        )
    }


}

export default Calendario;