/*  
    Descrição:
        Escrever uma função em js que receba dois numeros inteiros;
        verificar se um deles é negativo e o outro é positivo
        caso seja retornar verdadeiro
        caso contrario retornar falso.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-20.php
*/

//Minha solução:
function isPosiNega( number1, number2 ){
    if( number1 < 0 && number2 > 0 || number1 > 0 && number2 < 0 )  return true;
    else    return false;
}

console.log( isPosiNega( 10, 15 ) );
console.log( isPosiNega( -5, 50 ) );
console.log( isPosiNega( -30, -12) );
console.log( isPosiNega( 30, 35 ) );