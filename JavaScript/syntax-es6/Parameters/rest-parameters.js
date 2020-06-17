/*
    Rest parameters
*/

// ES05: Passando parametros desconhecidos da assinatura da função através de arguments
function maiorIdade5(){

    // arguments = Objeto e não Array 
    console.log( "MaiorIdade5", arguments );

    //Transformando Objeto em Array:
    var args = Array.prototype.slice.call( arguments );
    console.log( args );

    args.forEach( function( elementoAtual ) {
        console.log( elementoAtual, 2020 - elementoAtual,  ( 2020 - elementoAtual ) >= 18 );
    } )
}

maiorIdade5( 1950, 1996, 2005, 2002 );

// Argumento conhecido + argumentos desconhecidos.
function maiorIdade5Criterio( criterio ){
    console.log( "MaiorIdade5Criterio", arguments );

    //criterio estará presente no Objeto Arguments, então temos que transformar apenas a partir do segundo elemento em Array. 
    var args2 = Array.prototype.slice.call( arguments, 1 );

    console.log( args2 );

    args2.forEach( function ( elementoAtual ) {
        console.log( elementoAtual, 2020 - elementoAtual, ( 2020 - elementoAtual ) >= criterio, criterio );
    } )
}

// Passando o criterio na primeira posição: 18 anos
maiorIdade5Criterio( 18, 1950, 1996, 2005, 2002 );



// ES06: Utilizando Rest Parameters
function maiorIdade6( ...args ){
    console.log( args );

    args.forEach( ( elementoAtual ) => {
        console.log( elementoAtual, 2020 - elementoAtual, ( 2020 - elementoAtual ) >= 18 );
    } );
}

// Parametros são transformados em array contendo cada elemento abaixo.
maiorIdade6( 1950, 1996, 2005, 2002 );

// Argumento conhecido + argumentos desconhecidos
function maiorIdade6Criterio( criterio, ...args ){
    console.log( "MaiorIdade6Criterio", criterio, args );

    args.forEach( ( elementoAtual ) => {
        console.log( elementoAtual, 2020 - elementoAtual, ( 2020 - elementoAtual ) >= criterio, criterio );
    } )

}

maiorIdade6Criterio( 18, 1950, 1996, 2005, 2002 );