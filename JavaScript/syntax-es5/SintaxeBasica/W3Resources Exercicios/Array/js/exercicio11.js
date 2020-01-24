/*
    Descrição:
        Criar uma função em js que recebe como parmetro um vetor
        retorar a soma dos quadrados desse vetor.

    exemplo:
        entrada: [ 5, 2 ]
        saida: 5^2 + 2^2 = 25 + 4 = 29

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-11.php
*/
function somaDosQuadrados( vector ){
    console.log( "Parametros Fornecidos: " + vector );
    let ans = 0;

    if( vector.length <= 0 )    return ans;

    for( let i = 0; i < vector.length; i++ ){
        ans += vector[i]**2; 

    }
    // console.log( ans );
    return ans;

}

console.log( somaDosQuadrados( [ 5, 2 ] ) );
console.log( somaDosQuadrados( [ 1, 2, 3 ] ) );
console.log( somaDosQuadrados( [ 1, 10, 9  ] ) ); 
console.log( somaDosQuadrados( [ 0, 1, 2, 3, 4 ] ) );