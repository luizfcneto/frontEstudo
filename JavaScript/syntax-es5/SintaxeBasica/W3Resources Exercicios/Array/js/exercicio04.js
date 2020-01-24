/*
    Descrição:
        Escrever uma função em js que recebe como parametro um array e um numero
        retornar os elementos do array a partir do numero fornecido, do final para o começo

    Exemplo:
        entrada: [ 7, 9, 0, -2 ]
        saida: -2

        entrada: [ 7, 9, 0, -2 ], 3
        saida: [ 9, 0, -2 ]

        entrada: [ 7, 9, 0, -2 ], 6 
        saida: [ 7, 9, 0, -2 ]

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-4.php
*/

function last( arr, qtd ){
    console.log( "Parametros fornecidos: " + arr + " & " + qtd );

    if( qtd <= 0 || qtd === undefined ){
        if( arr.length === 0 ){
            return [];
        }else{
            return arr.slice( arr.length - 1, arr.length );
        }
    
    }else if( qtd >= arr.length ){
        return arr.slice();
    }else{
        return arr.slice( arr.length - qtd, arr.length );
    }

}

console.log( last( [7, 9, 0, -2] ) );
console.log( last( [], 3 ) );
console.log( last( [7, 9, 0, -2], 3 ) );
console.log( last( [7, 9, 0, -2], 6 ) );
console.log( last( [7, 9, 0, -2], -3 ) );