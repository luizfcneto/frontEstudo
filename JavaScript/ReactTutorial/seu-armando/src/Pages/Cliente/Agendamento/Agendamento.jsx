import React from "react";
import FormAgendamento from "../../../Components/Atendent/Agendamento/FormAgendamento";
import Calendario from "../../../Components/Atendent/Agendamento/Calendario/Calendario";

import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";


const _horario = {
    horarioInicio: "",
    horarioFim: ""
}

const _visita = {
    datas: [],
    horarios: []
}

const _sessao = {
    datas: [],
    horarios: []
}

const _agenda = {
    sessoes: [],
    visitas: []
}


class Agendamento extends React.Component{
    
    constructor( props ){
        super( props );

        this.state = {
            form: {
                formSessao: true,
                formVisita: false,
                formData: "",
                formHoraInicial: "",
                formHoraFinal: "",
                
            },

            agenda: {
                agendaMensal: true,
                agendaSemanal: false,
                agendas: [],
                sessoes: [],


                horario: _horario,
                visita: _visita,
                sessao: _sessao,
                agenda: _agenda
                
            }

        }

    }

    // Fazer função que capta alteração feita em um input, ao ter seu valor alterado ( onChange ) 
    inputHandler = ( event ) => {


    }

    render(){
        return(
            <div className="agendamento all">
                <Header logado="true" />
                <div className="container-fluid">
                    <div className="row">
                        <FormAgendamento
                            divClass="col-xs-3 col-xs-offset-1 formAgendamento background" 
                        /> 
                        
                        <Calendario 
                            divClass="col-xs-6 col-xs-offset-1 calendario"
                        />

                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }




}
export default Agendamento;