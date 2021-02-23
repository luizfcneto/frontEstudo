import React from "react";


// Componente Funcional = Componente sem estado ( states )
export default ( props ) => {

    const estagiarios = [ "Luiz", "Thiago", "Helena", "Jansen", "Rafael", "Manuela" ];

    let pontuacao = Math.round( Math.random() * 10 );

    // Método/ Função dentro de um componente Funcional.
    const gerarItensLista = ( itens ) => {
        return itens.map( ( item ) => {
            return <li> { item + ": " + pontuacao } </li>
        })
    }

    return (
        <div>
            <h2> Estagiários: </h2>
            <ul>
                { gerarItensLista( estagiarios ) }
            </ul>
        </div> 
    )
}