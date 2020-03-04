import React from "react";
import Membro from "./Membro";

// Forma 1:
// const FamiliaSilva = props => {
//     return (
//         <div>
//             <Membro name="Luiz Fernando" lastName="Silva" />
//             <Membro name="Rodrigo" lastName="Silva" />
//             <Membro name="Renata" lastName="Silva" />
//             <Membro name="Thabata" lastName="Silva" />
//         </div>
//     );
// }

// export default FamiliaSilva;

// ou Forma 2:
// export default props => {
//     return (
//         <div>
//             <Membro name="Luiz Fernando" lastName="Silva" />
//             <Membro name="Rodrigo" lastName="Silva" />
//             <Membro name="Renata" lastName="Silva" />
//             <Membro name="Thabata" lastName="Silva" />
//         </div>
//     )
// }

// ou Forma 3:
export default ( props ) => 
    <div>
        <Membro name="Luiz Fernando" lastName="Silva" />
        <Membro name="Rodrigo" lastName="Silva" />
        <Membro name="Renata" lastName="Silva" />
        <Membro name="Thabata" lastName="Silva" />
    </div>


// index.js <- Familia <- Membro 