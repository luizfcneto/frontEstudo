/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero
        Essa função retorna uma função anonima que deve retornar todos os 
        numeros de um array que sejam maiores do que numero passado como argumento
        da função pai.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-19.php
*/

function giveMeBiggerThan( num ){
    console.log( "Parametro Fornecido: " + num );

    return function( elemento, index, array ){
        console.log( elemento, index, array );
        return elemento > num;
    }

}

let array1 = [ 1, 5, 7, 9, 13, 10, 11 ];
console.log( array1.filter( giveMeBiggerThan( 10 ) ) );

let array2 = [ 1, 5, 2, 3, 65, 10, 4, 56 ];
console.log( array2.filter( giveMeBiggerThan( 2 ) ) );

let array3 = [ 1, 5, 2, 3, 65, 10, 4, 56 ];

/*
Não é possível fazer isso, a função filter() só aceita parametro de função callback;
contendo os elementos: 
    elemento, index, array

    exemplo:
        // Com função anonima
        array.filter( function( elemento, index, array ){

        });

        // Com função callback
        array.filter( GiveMeBiggerThan( num ) );

ERRADO:
console.log( array3.filter( 5, 
        function( elemento, index, array ){
            console.log( elemento, index, array );
            return elemento > num; 
        } 
    ) 
);

*/