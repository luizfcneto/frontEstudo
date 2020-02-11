/*
    Descrição:
        Fazer uma função em js que receba como parametro um numero, representando
        um valor montante de um dinheiro, e um outro parametro contendo um 
        array contendo os valores das moedas existentes.

        A função deve retornar a menor quantidade de moedas que representa o montante
        passado como argumento da função.

 
Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-14.php
*/

function amountToCoins( amount, coins ){
    console.log( "Parametros Fornecidos: " + amount + " & Moedas: " + coins );
    
    if( amount === 0 ){
        return [];
    }
    // Ordenando array de moedas
    coins = coins.sort( function( num1, num2 ){
        return num1 - num2;
    });

    // Colocando em ordem decrescente.
    coins.reverse();

    let arr = [];
    let missing = amount;

    for( let i = 0; coins.length; i++ ){
        
        let times = Math.trunc( missing / coins[i] );

        for( let t = 0; t < times; t++ ){
            arr.push( coins[i] );
        }

        missing = missing - ( times * coins[i] );
        if( missing === 0 ){
            break;
        }

    }

    return arr;
}

console.log( amountToCoins( 46, [ 25, 10, 5, 2, 1 ] ) );
console.log( amountToCoins( 137, [ 10, 25, 5, 1 ] ) );