import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from "./Components/Sobre";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*
    Para exibirmos mais de uma página com rotas distintas
    Exemplo:
    Rota "/" => App
    Rota "/sobre" => Sobre
    
    Para isso utilizamos um Component chamado BrowserRouter: <BrowserRouter>
    link: https://reacttraining.com/react-router/web/api/BrowserRouter

    Instalamos a biblioteca / dependencia / pacote contendo o BrowserRouter no nosso projeto
    com o comando:
    npm install --save react-router-dom
    É um componente que irá ser responsável por informar para a nossa aplicação que 
    a partir de onde ele é chamado teremos um roteamento de componentes;
    Exemplo:
        ReactDOM.render(
            <BrowserRouter>
                <App />
                <Sobre />
            
            </BrowserRouter>, document.getElementById( "root" )
        )

    Só que o BrowserRouter dessa forma acima vai exibir os dois componentes de uma vez,
    para exibir apenas um de acordo com o caminho precisamos importar mais dois
    componentes que pertencem a biblioteca react-router-dom, que são:
        - Switch:
            Recebe varios componentes de Route 

        https://reacttraining.com/react-router/web/api/Switch
            
        - Route
            Componente que tem os atributos:
                - path: string => "caminho da url desejada"
                - exact: { Boolean }   => so retorna caso o caminho [url] seja exatamente igual ao path
                - component: { ComponentDesejado }

        https://reacttraining.com/react-router/web/api/Route

    Exemplo:
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/sobre" exact={true} component={Sobre} />
            </Switch>

        </BrowserRouter> , document.getElementById( "root" )
    );
    
    OBS: 
     <Route path="*" component={ComponenteDePagina404} />
     Coringa: *, uma rota que apresenta o retorno de conexão de código 404 do sistema


*/
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            {/* <Route path="*" component={ComponenteDePagina404} /> */}
        </Switch>

    </BrowserRouter> , document.getElementById( "root" )
);


/*
    Para exibirmos mais de uma view em uma única página
    Exemplo: 
    página 1    : App
    página 2    : Sobre
    página 3    : Cadastro

    o ReactDOM.render aceita como parametro inicial um vetor de Componentes
    que serão exibidos na mesma página um abaixo da outra para cada elemento do 
    array

*/
// ReactDOM.render( [ <App />, <Sobre /> ], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
