import React from "react";
import IconButton from "../Template/iconButton";
import Todo from "./Todo";

import "../Template/custom.css";

export default ( props ) => {

    const formataData = ( arrData ) => {
        let ans = [];
        for( let i = 0; i < arrData.length; i++ ){
            ans.push( arrData[i].slice( 0, 10 ) );
        }
        return ans;

    }

    const renderRows = () => {

        // let list;
        let list = props.list || [];

        let dateList = [];
        for( let i = 0; i < list.length; i++ ){
            dateList.push( list[ i ].createdAt );
        }

        dateList = formataData( dateList );
        for( let i = 0; i < dateList.length; i++ ){
            list[i].createdAt = dateList[i];
        }

        return list.map( ( element )  => {
            return ( 
                <tr key={ element._id }>
                    <td className={ element.done ? "markedAsDone" : "" }> { element.description } </td>
                    <td> { element.createdAt } </td> 
                    <td> 
                        <IconButton
                            style="btn btn-success"
                            icon="fa fa-check-square-o"
                            hidden={ element.done }
                            onClick={ () => props.handleMarkAsDone( element ) }
                        >
                        </IconButton> 
                        
                        <IconButton 
                            style="btn btn-danger" 
                            icon="fa fa-trash"
                            hidden={ !element.done }
                            onClick={ () => props.removeElement( element ) }
                        >
                        </IconButton>

                        <IconButton
                            style="btn btn-warning"
                            icon="fa fa-undo"
                            hidden={ !element.done }
                            onClick={ () => props.handlePending( element ) }
                        >
                        </IconButton>

                    </td>
                </tr> 
            ) 
        } );

        /*
            OBS: Lembrar que sintaxe de arrow function pode ser:
            1. ( parametros ) => {
                return (
                    jsx ou js
                )
            }
            No 1 como ele executa uma função dentro de um escopo declarado por chaves {} é
            necessário colocar a palavra chave return. Dependendo do conteudo que irá retornar
            um jsx por exemplo é necessário colocar em formato de expressão ( entre parenteses )

            ou

            2. ( parametros ) => (
                jsx ou js
            )

            No 2 como ele retorna uma expressão não precisa por a palavra chave return
        */
    
    }
    
    return ( 
        <table className="table table-striped">
            
            <thead>
                <tr>
                    <th> Descrição da Tarefa </th>
                    <th> Data Criada </th>
                    <th className="tableActions"> Ações </th> 
                </tr>
            </thead>

            <tbody>
                { renderRows() }
            </tbody>

        </table>
    )
}