import React from "react";

/***********************************AULA COMPONENTE***************************************/
// Componente baseado em função:
// function primeiroMetodo(){
//     return <h1> Primeiro Componente - Função </h1>
// }
// export default primeiroMetodo;

// Componente baseado em uma função anonima:
// export default function(){
//     return <h1> Primeiro Componente - Função Anonima </h1>
// }

// Componente feito por uma arrow function:
// export default () => {
//     return <h1> Primeiro Componente - Arrow Function 1</h1>
// } 

// export default () => 
//     <div>
//         <h1> Primeiro Componente - Arrow Function 2 </h1> 
//     </div>

// export default () => (
//     <div>
//         <h1> Primeiro Componente - Arrow Function 3 </h1>
//     </div>
// )

// export default () => {
//     return (
//         <div> 
//             <h1> Primeiro Componente - Arrow Function 4 </h1> 
//         </div>
//     )
// }

/***********************************AULA PROPS***************************************/

let variavelExternaComponente = "Isso aqui não pertence ao JSX, é uma variavel externa ao componente JS";
export default ( props ) => {
    let variavelInternaComponente = "Isso aqui não pertence ao JSX, é uma variavel interna ao componente JS";    
    return (

        // Area contendo HTML + { Variaveis JS / Métodos JS }
        <div>
            <h1> { props.vogais } </h1>
            <p> { props.props1 } </p>
            <p> Pagrafo1 </p>
            <p> { props.idade } </p>

            <p> { variavelExternaComponente } </p>

            {/* props não funciona */}
            {/* <p> { props } </p> */}

            <p> { variavelInternaComponente } </p>
            
        </div>
    )

}