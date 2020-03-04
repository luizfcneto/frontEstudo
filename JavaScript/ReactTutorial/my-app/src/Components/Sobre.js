import React from 'react';
import logo from "../logo.svg";

import { Link } from 'react-router-dom'; 

class Sobre extends React.Component {

    render(){

        return(

            // Em HTML puro a o atributo a class é representada pelo atributo class, no jsx é className
            <div className="App">
                <header className="App-header"> 

                    {/* Atribuindo à src a variável logo */}
                    <img src={logo} className="App-logo" alt="logo" />

                    <h1 className="App-title"> Página Sobre </h1>
                </header>

                <h2> Exemplo de Página Sobre ;) </h2>
                
                <br/>

                {/* Adicionando um Link redirecionando para pagina do componente App */}
                <Link to="/" > Página Home </Link>

            </div>

        );
    }

}

export default Sobre;