/*
    Descrição:
        - Criar uma função que receba um array de strings como parametro
        - retornar o array ordenado critério:
            - a quantidade de caracteres que cada string possui.
            - retornar o array ordenado de forma crescente.

        Exemplo:
        entrada: [ "maça", "abacaxi", "uva", "limao" ];
        saida: [ "uva", "maca", "limao", "abacaxi" ];

*/

//Minha solução:
function sortByLength ( array ) {
    array = array.sort( function( a, b ){ return a.length - b.length } );
    return array;
};


let exemplo1 = [ "maça", "abacaxi", "uva", "limao" ];
console.log( "entrada: " + exemplo1 );

exemplo1 = sortByLength( exemplo1 );
console.log( "saida: " + exemplo1 );


//Outras soluções:
//function sortByLength (array) {
//    return array.sort((a,b) => a.length - b.length);
//};


//let sortByLength = arr => arr.sort((a,b) => a.length - b.length);