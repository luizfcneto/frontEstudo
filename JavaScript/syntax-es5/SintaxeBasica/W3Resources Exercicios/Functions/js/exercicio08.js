/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero.
        Checar se este numero é primo ou não.
        Retornar resposta.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
*/

function prime( num ){
    console.log( "Parametro Fornecido: " + num );

    let isPrime = true;
    if( num <= 1 ){
        return false;
    
    } else if( num === 2 ){
        return isPrime;
    
    } else{
        for( let i = 3; i < num; i = i + 2 ){
            if( num % i === 0 ){
                isPrime = false;
                break;
            }
    
        }
        return isPrime;
    }
}

console.log( prime( 21 ) );
console.log( prime( 17 ) );
console.log( prime( 7867 ) );