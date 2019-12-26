/*
    Descrição:
        Fazer uma função que receba um numero como parametro
        retornar a diferença entre o numero e 13
        caso a diferença entre o numero e 13 seja maior que 13
        retornar o produto da  diferença ( absoluta ) entre eles.

    Exemplo:
        entrada: 10
        saida: -3

        entrada: 28 => ( 28 - 13 ) = 15*2 = 30
        saida: 30

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-15.php
*/

//Minha solução:
function getTheDifference( number ){
    if( number >= 13 ){
        return ( number - 13 ) * 2;
    }else{
        return number - 13;
    }
}

console.log( getTheDifference( 28 ) );
console.log( getTheDifference( 10 ) ) ;
