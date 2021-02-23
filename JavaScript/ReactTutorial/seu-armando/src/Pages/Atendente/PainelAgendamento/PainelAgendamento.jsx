import React from "react";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import Calendario from "../../../Components/Atendent/Agendamento/Calendario/Calendario";
import FormAgendamento from "../../../Components/Atendent/Agendamento/FormAgendamento";
import List from "../../../Components/Admin/Common/List";


class PainelAgendamento extends React.Component {


    render(){
        return(
            <div className="all">
                <Header 
                    logado="true"
                    atendente="true"
                />

                <div className="container-fluid">

                    <div className="row">
                        <Calendario
                            divClass="col-xs-offset-1 col-xs-10 col-xs-offset-1 calendario"

                        />  
                    </div>

                    <br />

                    <div className="row">
                        <FormAgendamento 
                            divClass="col-xs-offset-1 col-xs-3 col-xs-offset-1 formAgendamento background"
                        />

                        <List 
                            listTitle="Visitas"
                            divClass="col-xs-3 col-xs-offset-1 background"
                        />

                        <List
                            listTitle="Sessões"
                            divClass="col-xs-3 background"
                        />

                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}

export default PainelAgendamento;