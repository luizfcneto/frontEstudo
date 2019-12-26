/*
    Descrição:
        Fazer uma função em js que receba dois numeros 
        retornar verdadeiro se um deles é 50 ou se a soma deles é 50.
        caso contrario retorne false

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-18.php
*/

function isThere50( num1, num2 ){
    if( num1 === 50 || num2 === 50 || num1 + num2 === 50 )  return true;
    else    return false;
}

console.log( isThere50( 50, 30 ) );
console.log( isThere50( 25, 25 ) );
console.log( isThere50( 20, 40 ) );