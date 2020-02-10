/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array de numeros
        Retornar o segundo menor numero e o segundo maior numero deste array

Solução:
*/

function getThend( array ){
    console.log( "Parmetro Fornecido: " + array );  
    let ans = [];
    array = array.sort();
    ans.push( array[1] );
    ans.push( array[ array.length - 2 ] );
    return ans;
}


console.log( getThend( [ 0, 2, 4, 6, 8 ] ) );
console.log( getThend( [ 1, 3, 5, 7, 9 ] ) );
