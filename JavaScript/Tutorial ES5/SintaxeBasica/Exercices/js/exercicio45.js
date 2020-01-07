/*
    Descrição:
        Fazer uma função em javascript que recebe como parametro dois numeros
        verificar se um dos numeros dados é 15 ou se a soma ou a diferença entre eles
        é 15.
        Caso seja, retornar verdadeiro, caso contrario falso.

Math: 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    https://www.w3schools.com/jsref/jsref_abs.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-45.php
*/

//Solução 1:
function verify( num1, num2 ){
    console.log( "Numeros fornecidos: " + num1 + " & " + num2 );

    if( num1 === 15 || num2 === 15 || Math.abs( num1 - num2 ) === 15  || num1 + num2 === 15 )
        return true;
    else   
        return false;
}

// Solulção 2:
function verify2( num1, num2 ){
    console.log( "Numeros fornecidos: " + num1 + " & " + num2 );
    return (  num1 === 15 || num2 === 15 || Math.abs( num1 - num2 ) === 15  || num1 + num2 === 15 );
}

console.log( verify( 10, 15 ) );    //true;
console.log( verify( 15, 30 ) );    //true;
console.log( verify( 45, 30 ) );    //true;
console.log( verify( 10, 5 ) );     //true;
console.log( verify( 50, 19 ) );    //false;