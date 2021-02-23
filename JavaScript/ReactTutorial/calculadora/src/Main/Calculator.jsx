import React, { Component } from "react";

// importando CSS
import "./Calculator.css";
import Button from "../Components/Button";
import Display from "../Components/Display";

// class Calculator extends Component {
    
//     clearMemory() {
//         console.log( "Limpar" );
//     }

//     setOperation( operation ){
//         console.log( operation );
//     }

//     addDigit( n ){
//         console.log( n );
//     }

//     render(){

//         const setOperation = ( op ) => this.setOperation( op );
//         const addDigit = ( digit ) => this.addDigit( digit );

//         return(
//             <div className="calculator">
//                 <Display value="0"/>
//                 <Button label="AC/C" click={ () => this.clearMemory() } triple />
//                 <Button label="/" click={ setOperation } operation />
//                 <Button label="7" click={ addDigit } />
//                 <Button label="8" click={ addDigit } />
//                 <Button label="9" click={ addDigit } />
//                 <Button label="X" click={ setOperation } operation />
//                 <Button label="4" click={ addDigit } />
//                 <Button label="5" click={ addDigit } />
//                 <Button label="6" click={ addDigit } />
//                 <Button label="-" click={ setOperation } operation />
//                 <Button label="1" click={ addDigit } />
//                 <Button label="2" click={ addDigit } />
//                 <Button label="3" click={ addDigit } />
//                 <Button label="+" click={ setOperation } operation />
//                 <Button label="0" click={ addDigit } double />
//                 <Button label="." click={ addDigit } />
//                 <Button label="=" click={ setOperation } operation />

//             </div>
//         )
//     }
// }

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [ 0, 0 ],
    current: 0
}

class Calculator extends Component  {
    
    state = { ...initialState };

    constructor( props ){
        super( props ); 
        this.clearMemory = this.clearMemory.bind( this );
        this.setOperation = this.setOperation.bind( this );
        this.addDigit = this.addDigit.bind( this );
    }

    clearMemory() {
        this.setState( { ...initialState } );
        console.log( "Limpar" );
    }

    setOperation( operation ){
        if( this.state.current === 0 ){
            this.setState( { current: 1, clearDisplay: true, operation: operation } );
        
        }else{
            
            if( operation === "=" ){
                const currentOperation = this.state.operation;

                let values = [ ...this.state.values ];
                switch( currentOperation ){
                    case "+": 
                        values[0] = values[0] + values[1];
                        values[1] = 0;
                        this.setState( { values, operation: null, clearDisplay: true, current: 1, displayValue: values[0] } );
                        break;

                    case "-": 
                        values[0] = values[0] - values[1];
                        values[1] = 0;
                        this.setState( { values, operation: null, clearDisplay: true, current: 1, displayValue: values[0] } );
                        break;

                    case "X":
                        values[0] = values[0] * values[1];
                        values[1] = 0;
                        this.setState( { values, operation: null, clearDisplay: true, current: 1, displayValue: values[0] } );
                        break;

                    case "/":
                        values[0] = values[0] / values[1];
                        values[1] = 0;
                        this.setState( { values, operation: null, clearDisplay: true, current: 1, displayValue: values[0] } );
                        break;

                    default: 
                        console.log( currentOperation, operation );
                }
            }
        }

        console.log( this.state );
    }

    addDigit( digit ){
        
        // Verificando se numero ja possui um ponto, 3.41.2 -> não existe.
        if( digit === "." && this.state.displayValue.includes( "." ) ){
            return 
        }

        // Verificando se o numero 0 inicial deve ser limpo ou não. Estado inicial do display da calculadora é 0
        let clearDisplay = false;
        if( this.state.displayValue === "0" || this.state.clearDisplay === true ){
            clearDisplay = true;
        }
        // ou
        // const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;

        // // Verificar se clearDisplay é true, caso seja valor corrente será nulo/vazio, caso clearDisplay seja falso, então valor corrente será o mesmo do estado
        let currentValue;
        if( clearDisplay === true ){
            currentValue = "";
        }else if( clearDisplay === false ){
            currentValue = this.state.displayValue;
        }
    
        //ou
        // const currentValue = clearDisplay ? "" : this.state.displayValue;
        
        // Incrementa o numero do display com valor corrente do estado mais o digito apertado:
        const displayValue = currentValue + digit;
        this.setState( { displayValue, clearDisplay: false } );
        console.log( displayValue );

        // se digitar numeros de 0 até 9
        if( digit !== "." ){
            let position = this.state.current;
            let newvalue = parseFloat( displayValue );

            let values = [ ...this.state.values ]
            values[ position ] = newvalue;
            this.setState( { values } ); 
            console.log( "STATES:" + this.state.values );
        }



    }

    render(){

        return(
            <div className="calculator" >
                <Display value={ this.state.displayValue } />
                <Button label="AC/C" click={ this.clearMemory } triple />
                <Button label="/" click={ this.setOperation } operation />
                <Button label="7" click={ this.addDigit } />
                <Button label="8" click={ this.addDigit } />
                <Button label="9" click={ this.addDigit } />
                <Button label="X" click={ this.setOperation } operation />
                <Button label="4" click={ this.addDigit } />
                <Button label="5" click={ this.addDigit } />
                <Button label="6" click={ this.addDigit } />
                <Button label="-" click={ this.setOperation } operation />
                <Button label="1" click={ this.addDigit } />
                <Button label="2" click={ this.addDigit } />
                <Button label="3" click={ this.addDigit } />
                <Button label="+" click={ this.setOperation } operation />
                <Button label="0" click={ this.addDigit } double />
                <Button label="." click={ this.addDigit } />
                <Button label="=" click={ this.setOperation } operation />

            </div>
        )
    }
}   


export default Calculator;