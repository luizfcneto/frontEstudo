import React from "react";

// Aula comunicação entre pai e filho ( passando props de pai para filho )
import { mapeiaFilhosPropsPai } from "../utils/utils"; 

/***********************************AULA RELACAO ENTRE COMPONENTES 2 (PERSONALIZANDO)***************************************/
// export default props => 
//     <p> { props.children } </p>

//ou 
// export default ( props ) => {
//     return (
//         <div>
//             <p> { props.children } </p>
//         </div>
//     )
// }

//ou
// export default ( props ) => {
//     return <p> { props.children } </p>
// }

    {/* props.children
        children é um atributo do objeto props que contem todos os parametros 
        fornecidos a esse Componente, que nesse caso serão outros componentes filhos de Familia
        com suas declarações e atributos.
        renderiza todas as tags ( filhos ) contidos em Familia
    */}
     
    // index <- Familia { Filhos: Membro1, ... )


/***********************************AULA COMUNICACAO ENTRE COMPONENTES***************************************/
// export default ( props ) => {
//     return (
//         <div>
//             <h2> { props.nomeFamilia } </h2>
//             <p> { props.children } </p>
//         </div>
//     )
// }

/***********************************AULA COMUNICACAO ENTRE PAI E FILHO ( SOL: 1 )***************************************/

// export default ( props ) => {
//     return (
//         <div>
//             <h2> { props.nomeFamilia } </h2>
            
//             {/* React.cloneElement( props.children, { nomeFamilia: props.nomeFamilia } ) */}
//             {/* ou */}
//             {/* { React.cloneElement( props.children, props ) } */}
//             {/* ou */}
//             { React.cloneElement( props.children, { ...props } ) }
//         </div>
//     )
// }

/*
    Explicando solução 1: React.cloneElement( destino, props que enviarei para destino )
    Essa solução 1 só funciona para quando um Componete possui apenas um filho.
    Utilizamos o React.clone para enviar as propriedades desejadas para as propriedades do filho
    na prática, React.cloneElement criará um clone do props, e este será passado para o filho
    podemos passar esses parametros de algumas formas:
    1- React.cloneElement( props.children, { nomeFamilia: props.nomeFamilia } )
        criamos um outro objeto e deinimos seus atributos e atribuimos a ele
        o props do pai que será passado para o filho.

    2- React.cloneElement( props.children, props )
        Passamos por referencia o objeto props para o filho,
        neste caso passaremos todas as propriedades de pai para filho
        [ Não muito utilizado ]

    3- React.cloneElement( props.children, ...props )
        sintaxe: ...props na prática é fazer uma atribuição por desestruturação de todos os 
        atributos de props.
        por baixo dos panos é fazer o mesmo que o 1, só que auxiliaria caso tivessem muitas 
        propriedades
        
*/

/***********************************AULA COMUNICACAO ENTRE PAI E FILHO ( SOL: 2 )***************************************/
export default ( props ) => {
    return (
        <div> 
            <h2> Nome da Familia: { props.nomeFamilia } </h2>

            {/* <p> { React.Children.map( props.children, function( filho ) {
                return React.cloneElement( filho, { ...props } );
            } ) } </p> */}

            {/* ou */}

            {/* <p> { React.Children.map( props.children, ( filho ) => {
                return React.cloneElement( filho, { ...props } );
            } ) } </p> */}

            {/* ou */}
            <p> { mapeiaFilhosPropsPai( props ) }</p>

        </div>
    )
}

/*
    Explicando Solução 2: React.Children.map( props, funcao_callback )
    Resumidamente, a solução 2 é basicamente fazer um mapeamento com todos os elementos
    filhos do Componente Familia ( neste contexto ) com a Solução 1.

    Exmplicando: 
        - Para utilizar o mapeamento devemos fazer a seguinte declaração:
            React.Children.map( parametro1, parametro2 ).

            parametro1 = objeto que será utilizado na função_callback;
            parametro2 = função_callback que irá fazer uma ação para cada elemento Filho

            Ficando dessa forma:
                //es5
                React.Children.map( props.children, function( filho ) {
                    //Código do mapeamento, vulgo Solução 1
                    return React.cloneElemenet( filho, props* );
                }); 
                * props passado por referencia. Não muito recomendado.
                resumidamente:
                { atributoProps1: valorAtributo1, atributoProps2: valorAtributo2, ... }

                //es6
                React.Children.map( props.chidren, ( filho ) => {
                    //Código do mapeamento, vulgo solução 1
                    return React.cloneElement( filho, { ...props } );
                })
                ou
                React.Children.map( props.children, filho => {
                    //Código do mapeamento, vulgo solução 1
                    return React.cloneElement( filho, { ...props } );
                })

*/