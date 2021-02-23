import React from "react";


class ComponenteClasse extends React.Component{

    render(){
        return(

            // <h1> Eu sou uma classe! </h1>

            // Referenciando props aqui dentro de render
            <h1> { this.props.valor || "Outro Valor caso props.valor seja falso" } </h1>
        );
    }
}

export default ComponenteClasse;