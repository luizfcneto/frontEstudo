import React from "react";

// const Componente1 = ( props ) => {
//     return <p> Olá, { props.ola } </p>
// }

// const Componente2 = ( props ) => {
//     return <p> { props.ola } </p>
// }

// const Componente3 = ( ) => {
//     return (
//         <div>
//             <p> Legal, to lendo tudo que voces estao escrevendo... </p>
//         </div>
//     )
// } 

// export { Componente1, Componente2, Componente3 };

/***********************************AULA IMPORT/EXPORT***************************************/
export const Componente1 = props =>
    <h1> { props.ola }</h1>
    
export const Componente2 = ( props ) => {
    return (
        <p> { props.ola } </p> 
    )
};

const Componente3 = () =>
    <div> 
        <p> Legal, to lendo tudo que voces estão escrevendo... </p>
    </div>

export default Componente3;

// ERRO: exportando mais de um Componente por forma padrão
// export default Componente2;
// ou 
// export default Componente2, Componente3;
// ou
// export default [ Componente2, Componente3 ];