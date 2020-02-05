/*
    Descrição:    
        Fazer uma função que receba um array de objetos
        Ordenar esse array e retorna-lo
    
        Criterio de ordenação:
            id crescente.   A solução não é esse critério.

Array.sort:
    https://www.w3schools.com/jsref/jsref_sort.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-10.php
*/

function ordenaArrayObj( arrObj ){
    console.log( "Parametros Fornecidos:" );
    console.log( arrObj );

    // Percorrer o vetor de objeto Forma de ordenação: Bubble Sort
    // for( let i = 0; i < arrObj.length - 1; i++ ){
        
    //     for( let j = 1; j < arrObj.length; j ++ ){

    //         if( arrObj[i].id > arrObj[j].id ){
    //             let aux = arrObj[j];                
    //             arrObj[j] = arrObj[i];
    //             arrObj[i] = aux;
    //         }

    //     }
    // }

    // return arrObj;

    // Outra forma utilizando array.sort()
    arrObj.sort( function ( a, b ){
        return a.id - b.id;
    });

    // ou 
    // arrObj.sort( function( a, b ){
    //     if( a.id > b.id ){
    //         return 1;
    //     }
    //     if( a.id < b.id ){
    //         return -1;
    //     }
    //     return 0;

    // });
    return arrObj;

}


let biblioteca = [
    {
        titulo:  'The Road Ahead',
        autor: 'Bill Gates',
        id: 1254
    },
    {
        titulo: 'Walter Isaacson',
        autor: 'Steve Jobs',
        id: 4264
    },
    {
        titulo: 'Mockingjay: The Final Book of The Hunger Games',
        autor: 'Suzanne Collins',
        id: 3245
    }
];

console.log( ordenaArrayObj( biblioteca ) );