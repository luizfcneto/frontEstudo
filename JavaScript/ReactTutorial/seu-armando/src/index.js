import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Index from "../src/Pages/Index";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SolicitarOrcamento from './Pages/Solicitar Orcamento/SolicitarOrcamento';
import Login from "./Pages/Login/Login";
import Loja from "./Pages/Loja/Loja";
import MinhasFotos from "./Pages/MinhasFotos/MinhasFotos";
import Sobre from "./Pages/Sobre/Sobre";

// Componente da páginda de produto
import Produto from './Pages/Loja/Produto/Produto';

//Componentes do Cliente
import Perfil from "./Pages/Cliente/Perfil/Perfil";
import Agendamento from "./Pages/Cliente/Agendamento/Agendamento";
import Carrinho from "./Pages/Cliente/Carrinho/Carrinho";


// Componente do Atendente
import PainelAgendamento from "./Pages/Atendente/PainelAgendamento/PainelAgendamento";
import ResponderOrcamento from "./Pages/Atendente/ResponderOrcamento/ResponderOrcamento";

//Componentes do Administrador:
import DashBoard from "../src/Pages/Admin/DashBoard";

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter> 
        <Switch>
            <Route path="/cadastro" component={ Cadastro } />
            <Route path="/login" component={ Login }/>
            <Route path="/solicitar-orcamento" component={ SolicitarOrcamento } />
            <Route path="/minhas-fotos" component={ MinhasFotos } />
            <Route path="/sobre" component={ Sobre } />           
            <Route path="/loja" component={ Loja } />

            {/* Link para a página de um produto */}
            <Route path="/produto" component={ Produto } />

            {/* Componentes de Cliente */}
            <Route path="/agendamento" component={ Agendamento } />
            <Route path="/carrinho" component={ Carrinho } />
            <Route path="/perfil" component={ Perfil } />

            {/* Componentes do Atendente */}
            <Route path="/painel-agendamento" component={ PainelAgendamento } />
            <Route path="/responder-orcamento" component={ ResponderOrcamento } />

            {/* Componentes do Admin */}
            <Route path="/dashboard-admin" component={ DashBoard } />

            <Route path="/" component={ Index } />
            <Route path="*"></Route>

        </Switch>

    </BrowserRouter>
    ,document.getElementById( 'root' ) 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
