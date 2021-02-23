import React, { Component } from "react";

// Importando o Componente AXIOS 
import axios from "axios";

import PageHeader from "../Template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = "http://localhost:3003/api/todos";

class Todo extends Component {

    constructor( props ){
        super( props );
        
        this.state = {
            description: "",
            list: []
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleAddEvent = this.handleAddEvent.bind( this );
        this.removeElement = this.removeElement.bind( this );

        this.handleMarkAsDone = this.handleMarkAsDone.bind( this );
        this.handlePending = this.handlePending.bind( this );

        this.handleSearch = this.handleSearch.bind( this );

        this.handleClear = this.handleClear.bind( this );

        this.refresh();
    }

    

    // Adiciona Novas tarefas na lista
    handleAddEvent() {
        console.log( "Evento de Add.." );
        // // console.log( this );
        // console.log( this.state.description );
        
        const description = this.state.description;
        
        // Método POST para enviar o dado de descrição do formulário para nossa API
        axios.post( URL, { description } ).then( ( resposta ) => {
                // console.log( resposta );
                // console.log( resposta.data );
                if( resposta.status === 201 ){
                    // console.log( "FUNCIONOU!" );
                }                
                this.refresh();
            } );
    }

    // Remove Elementos da Lista pelo critério do id:
    removeElement( todo ) {
        console.log( "Evento de remoção de elemento" );

        axios.delete( `${URL}/${todo._id}` ).then( ( resposta ) => {
            // console.log( resposta );
            // console.log( resposta.status );
            if( resposta.status === 204 || resposta.status === 200 || resposta.status === 201 )  {
                // console.log( "Elemento " + todo.description + " removido com sucesso" );    
            
            }else{
                console.log( "Erro: ", resposta.status );
            }

            // Manter o texto de descrição após remover um elemento
            this.refresh( this.state.description );
            
        });
    }

    /* 
        HandleChange vai ser invocado pelo componente filho TodoForm quando o 
        usuario alterar o valor do input. tem como parametro fornecido um e ( evento )    
    */
    handleChange( e ){
        // console.log( e.target.value );
        this.setState( {
            ...this.state,
            description: e.target.value
        } );   
    }

    // Atualiza exibição de lista
    refresh( description = "" ) {
        console.log( "Atualizando exibição de Lista" );

        const search = description ? `&description__regex=/${description}/` : ""
        axios.get( `${URL}?sort=-createdAt${search}` ).then( ( resposta ) => {
            if( resposta.status === 200 || resposta.status === 201 ) {
                // console.log( "Lista atualizada com sucesso", resposta.status );
                this.setState( { 
                    ...this.state,
                    description, 
                    list: resposta.data
                } );
            
            }else {
                console.log( "Erro: " + resposta.status );
            }
        } );
    }

    // Função responsável por modificar estado de tarefa concluida para pendente
    handlePending( todo ){
        axios.put( `${URL}/${todo._id}`, { ...todo, done: false } ).then( ( resposta ) => {
            if( resposta.status > 199 && resposta.status < 300 ){
                this.setState( {
                    ...this.state,
                    done: false
                } );
                // console.log( "Alteração concluida para pendente " );
                // console.log( "Concluida: " + todo.done, todo.description );
                
                // Manter a descrição após alterar estado de conclusão da tarefa
                this.refresh( this.state.description );
            }else{
                console.log( "Erro: ", resposta.status );
            }

        } );
    }

    // Função responsável por modificar estado de tarefa pendente para concluida
    handleMarkAsDone( todo ) {
        axios.put( `${URL}/${todo._id}`, { ...todo, done: true } ).then( ( resposta ) => {
            if( resposta.status > 199 && resposta.status < 300 ){
                this.setState( {
                    ...this.state,
                    done: true
                } );    
                // console.log( "Alteração concluida para done" );
                // console.log( "Concluida: " + todo.done, todo.description );

                // Manter a descrição após alterar estado de conclusão da tarefa
                this.refresh( this.state.description );
            }else {
                console.log( "Erro", resposta.status );
            }

        } );
    }

    handleSearch() {
        this.refresh( this.state.description );
    }

    handleClear() {
        this.refresh();
    }

    render(){
       
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={ this.state.description }
                    handleChange={ this.handleChange }
                    handleAddEvent={ this.handleAddEvent } 
                    handleSearch={ this.handleSearch }
                    handleClear={ this.handleClear }
                />            
                <TodoList
                    list={ this.state.list }
                    handleMarkAsDone={ this.handleMarkAsDone }
                    handlePending={ this.handlePending }
                    removeElement={ this.removeElement }
                />    
            </div>
        )
    }
}

export default Todo;