/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero
        retornar esse numero de trás para frente.

    Exemplo:
        entrada: 2578
        saida: 8752


Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php
*/

function reverseNumber( number ){
    console.log( "Parametro fornecido: " + number );
    number = number.toString();
    number = number.split("");
    number = number.reverse();
    number = number.join("");
    return parseInt( number );
}

function reverseNumber2( number ){
    console.log( "Parametro Fornecido: " + number );
    return parseInt( number.toString().split( "" ).reverse().join( "" ) );
}

reverseNumber3 = ( number ) => parseInt( number.toString().split( "" ).reverse().join( "" ) );

console.log( reverseNumber( 2578 ) );
console.log( reverseNumber2( 18554672 ) );
console.log( reverseNumber3( 123456789 ) );