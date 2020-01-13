/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array de numeros
        encontrar e retornar os valores duplicados presentes neste array em um
        novo array.


Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
*/

function findDuplicate( arr ){
    console.log( "Parametro fornecido: " );
    console.log( arr );

    let result = [];

    for( let index in arr ){
        let repeat = 0;

        for( let i = 0; i < arr.length; i++ ){
            
            if( i !== index ){
                if( arr[index] === arr[i] ){
                    repeat++;
                } 

                if( repeat > 1 ){
                    if( isThere( arr[index], result ) === false ) {
                        result.push( arr[index] );
                    } 
                }
            }
        }
    }
    return result;
}

function isThere( number, arr ){
    for( let element of arr ){
        if( element === number ){
            return true;
        }
    }
    return false;
}


console.log( findDuplicate( [ 1, 2, 3, 4, 5, 6, 2, 7, 8, 10, 4, 1, 3 ] ) );
console.log( findDuplicate( [ 1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6 ] ) );