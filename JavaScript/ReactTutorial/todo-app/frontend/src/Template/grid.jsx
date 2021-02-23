import React from "react";



export default class Grid extends React.Component {

    // constructor( props ){
    //     super( props );
    // }

    numberToCSS( stringNumbers ){
        // console.log( "Parametros Fornecidos: " + stringNumbers );

        if( stringNumbers === undefined ){
            return "col-xs-12";
        }

        stringNumbers = stringNumbers + "";
        let arrNumbers = stringNumbers.split( " " );
        let className = "";

        if( arrNumbers[0] ){
            className += "col-xs-" + arrNumbers[0];
        }
        if( arrNumbers[1] ){
            className += " col-sm-" + arrNumbers[1];
        }
        if( arrNumbers[2] ){
            className += " col-md-" + arrNumbers[2];
        }
        if( arrNumbers[3] ){
            className += " col-lg-" + arrNumbers[3];
        }
        // console.log( className );        
        return className;
    }

    render(){
        const gridClasses = this.numberToCSS( this.props.cols )
        return(
            <div className={ gridClasses }>
                { this.props.children }
            </div>
        )
    }

}