import React from "react";

export default ( props ) => {

    return(

        // <button onClick={ () => props.sairParaOnde("Longe") }>
        //     vou sair
        // </button>
        // ou

        <button onClick= { function() {
            return props.sairParaOnde( "Para tão tão distante!" )
        } }> Vou Sair
        </button>    
    );

}

/*
    Explicação:
        Filho Retorna informação para o pai, utilizando uma função callback de pai,
        passada como parametro via props de pai para filho.
        Neste caso ele passou um alerta, mas poderia ser um objeto e etc.

        Comunicação indireta entre filho e pai se dá por eventos com funções callback

        Neste exemplo ambos componentes estão diretamente relacionados, então esse tipo 
        de comunicação indireta é possível.

        Se componentes estivessem em possições diferentes na arvore, sem comunicação direta entre
        elas, este tipo de comunicação indireta não é mais viável desta forma
        para tal utilizamos outras formas que veremos mais a frente.
*/