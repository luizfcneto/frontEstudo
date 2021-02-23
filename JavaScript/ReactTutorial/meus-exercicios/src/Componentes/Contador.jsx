import React from "react";

class Contador extends React.Component{

    // Dentro do Componente / Fora do Construtor
    state = {
        numero: this.props.numeroInicial
    }

    // Dentro do Construtor
    // constructor( props ){
    //     super( props );
    //     state = { numero: this.props.numeroInicial }
    // }

    incrementaNumero = () => {
        // Funciona:
        // this.setState( {
        //     numero: this.state.numero + 1 
        // } );
        // console.log( this.state.numero );

        // Não Funciona:
        // this.setState( this.state, () => {
        //     this.state.numero++;
        // } );
        // console.log( this.state.numero );

        // ou
        this.alteraNumero( 1 );
         console.log( this.state.numero );
    }

    decrementaNumero = () => {
        // this.setState( { 
        //     numero: this.state.numero - 1 
        // } );

        //ou
        this.alteraNumero( -1 );
        console.log( this.state.numero );
    }

    /*
    por padrão a função arrow pode receber um parametro informando o evento
    que aconteceu para ele ser chamado.
    event.target sabemos qual elemento que chamou o evento.
    decrementaNumero = ( event ) => {
        console.log( event.target );
    }
    */

    // Alterando o numero dependendo do parametro de diferença fornecida ( parametros na função callback )
    alteraNumero = ( diferenca ) => {
        this.setState( { 
            numero: this.state.numero + diferenca 
        } );
    }

    render(){

        return (
            <div>
                <h2> { this.state.numero } </h2>
                <button onClick={ this.incrementaNumero }> Incrementa </button>
                <button onClick={ this.decrementaNumero }> Decrementa </button>

                {/* Passando parametros na função callBack */}
                <button onClick={ () => this.alteraNumero( 10 ) }> Incrementa 10 </button>
                <button onClick={ () => this.alteraNumero( -10 ) }> Decrementa 10 </button>
                
            </div>
        );
    }

}

export default Contador;