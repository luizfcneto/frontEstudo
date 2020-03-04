import React from "react";

// const Membro = ( props ) => {
//     return (
//         <div>
//             <p> { props.name } <strong> { props.lastName } </strong> </p>
//         </div>
//     );
// }

// export default Membro;

// ou
// export default props => 
//     <div>
//         <p> { props.name } <strong> { props.lastName } </strong> </p>
//     </div>

// ou 
export default ( props ) => {
    return (
        <div> 
            <p> { props.name } <strong> { props.nomeFamilia } </strong> </p>
        </div>
    )
}