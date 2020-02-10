/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        retornar essa string em ordem alfabética. 
        OBS: ( Não considerar pontuação ou simbolos na string )

    Exemplo:
        entrada: "pipoca"
        saida: "aciopp"

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-4.php
*/

function alphabeticalOrder( str ){
    console.log( "Parametro Fornecido: " + str );
    let ans = [];
    ans = str.trim().split( "" ).sort();
    return ans;   

}

function alphabeticalOrder2( str ){
    console.log( "Parametro Fornecido: " + str );

    str = str.trim().split( "" );
    
    // Ordenação do array
    str = str.sort( function( letter1, letter2 ){
        
        // console.log( letter1, letter2 );
        // console.log( letter1.charCodeAt( 0 ), letter2.charCodeAt( 0 ) );
        return letter1.charCodeAt( 0 ) - letter2.charCodeAt( 0 );
    } );

    return str;

}

let alphabeticalOrder3 = ( str ) => {
    console.log( "Parametro Fornecido : " + str );
    return str.trim().split("").sort();
}

console.log( alphabeticalOrder( "pipoca" ) );
console.log( alphabeticalOrder2( "pipoca" ) );
console.log( alphabeticalOrder3( "pipoca" ) );

console.log( alphabeticalOrder( "elefante" ) );
console.log( alphabeticalOrder2( "elefante" ) );
console.log( alphabeticalOrder3( "elefante" ) );