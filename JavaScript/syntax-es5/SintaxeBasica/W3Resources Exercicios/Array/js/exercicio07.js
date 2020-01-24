/*
    Descrição:
        Fazer uma função em js que receba como parametro um array de numeros
        retornar esse array de forma que ele esteja ordenado
    
    Exemplo:
        entrada: [ -7, 9, 4, 2, 8, 5 ]
        saida: [ -7, 2, 4, 5, 8, 9 ]

Array:
    https://www.w3schools.com/js/js_array_sort.asp
    https://www.w3schools.com/jsref/jsref_sort.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    https://www.geeksforgeeks.org/javascript-array-sort/

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-7.php
*/

// Solução 1: Utilizando o método Array.sort()
function doTheSort( arr ) {
    console.log( "Parametro Fornecido: " + arr );
    return arr.sort();
    
}

console.log( doTheSort( [ -7, 9, 4, 2, 8, 5 ] ) );