/*
    Descrição:
        Faça uma função em js que receba como parametro um numero
        calcule a diferença absoluta entre o numero e 19
        caso a diferença absoluta entre o numero e 19 seja maior que 19 retorne o seu triplo
        caso contrario retorne apenas a diferença absoluta.

    Exemplo: 
        entrada: 50 => 50 - 19 = 31 ( 31 > 19 ) => 31 * 3 = 93
        saida: 93

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-17.php
*/

function especificOperation( number ){
    let absolutDiff;
    if( number < 19 ){
        absolutDiff = 19 - number;
    }else{
        absolutDiff = number - 19;
    }
    
    if( absolutDiff > 19 ){
        return absolutDiff * 3;
    }else{
        return absolutDiff;
    }


}

console.log( especificOperation( 50 ) );
console.log( especificOperation( 38 ) );
console.log( especificOperation( 25 ) );