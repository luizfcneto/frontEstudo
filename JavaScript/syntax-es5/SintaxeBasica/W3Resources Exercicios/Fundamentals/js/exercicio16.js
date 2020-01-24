/*
    Descrição:
        fazer uma função que receba dois numeros como parametro
        se os dois numeros forem iguais retorne o triplo da soma
        senão retorne a soma.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-16.php
*/

// Minha solução
function especificSum( number1, number2 ){
    if( number1 === number2 ){
        return ( number1 + number2 ) * 3;
    }else{
        return number1 + number2;
    }
}


console.log( especificSum( 5, 5 ) );
console.log( especificSum( 5, 6 ) );
