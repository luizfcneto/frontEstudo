import React from "react";

class Contador extends React.Component{

    constructor( props ){
        super(props);
        this.state = props.numero;
    }

    incrementaNumero = () => {
        // console.log( this.props.numero );
        this.setState( ( props ) => {
            this.state.numero = this.state.numero + 1;
        } );
    }

    decrementaNumero = () => {
        // console.log( this.props.numero );
        this.setState( ( props ) => {
            this.state.numero = this.state.numero + 1;
        } )
    }

    render(){

        return (
            <div>
                <h2> { this.props.numero } </h2>
                <button onClick={ this.incrementaNumero }> Incrementa </button>
                <button onClick={ this.decrementaNumero }> Decrementa </button>
            </div>
        );
    }

}

export default Contador;