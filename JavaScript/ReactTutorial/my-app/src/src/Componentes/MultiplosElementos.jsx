import React from "react";


// Solução 1 de como retornar elementos html adjacentes
// export default ( props ) => 
//     <div>
//         <h2> Curso </h2>
//         <h2> React </h2>
//     </div>

// export default props =>
//     <React.Fragment>
//         <h2> Curso React </h2>
//         <h2> Leonardo Moura Leitão </h2>
//     </React.Fragment>

export default props => [
    <h2> Curso de React e Redux </h2>,
    <h2> Com Leonardo Moura Leitão </h2>
]