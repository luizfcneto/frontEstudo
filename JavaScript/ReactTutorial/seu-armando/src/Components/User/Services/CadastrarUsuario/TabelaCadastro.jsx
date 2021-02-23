import React from "react";
import "./tabelaCadastro.css";
import TitleH2 from "../../../../Common/TitleH2";

export default ( props ) => {


    /* Função que mapeia os usuarios cadastrados de 
        lista de usuarios fornecidos por props
    */
    const renderRow = () => {

        let lista = props.listaUsuarios;

        return lista.map( ( element, id ) => {
            return(
                <tr key={ id }> 
                    <td> { id }</td>
                    <td>  { element.login } </td>
                    <td> { element.dataNascimento } </td>
                    <td> {element.cpf } </td>
                    <td> { element.email } </td> 
                </tr>
            )
        } );
    }

    return(
        <div>
            
            <TitleH2 title="Tabela Usuários Cadastrados:" titleClass="titleClass" />
            
            <div className="row panel-body">
                <table className="table table-striped">
                    <thead>
                        <tr> 
                            <th> # </th>
                            <th> Login: </th> 
                            <th> Data de Nascimento: </th>
                            <th> CPF: </th>
                            <th> Email: </th>
                            
                        </tr>
                    </thead>

                    <tbody>
                       { renderRow() }
                    </tbody>                          

                </table>
            </div>
        </div>
        
    )

}