/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero
        retornar os fatores desse numero.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-13.php
*/

function fatores( num ){
    console.log( "Parametro Fornecido: " + num );
    let arr = [];

    for( let i = 1; i <= num; i++ ){
        if( num % i === 0 ){
            arr.push( i );
        }
    }

    return arr;
}

console.log( fatores( 6 ) );
console.log( fatores( 28 ) );
console.log( fatores( 56 ) );
console.log( fatores( 50 ) );
console.log( fatores( 32 ) );
console.log( fatores( 15 ) );
console.log( fatores( 16 ) );
console.log( fatores( 17 ) );
