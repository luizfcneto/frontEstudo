/*
    Descrição:
        Fazer um programa em js que recebe como parametro um array 
        embaralhar os elementos desse array e retornar

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
*/

function shuffleThisArray( arr ){
    console.log( "Parametro Fornecido :" + arr );
    let shuffleArray = [];
    let newPos = 0;
    for( let i = 0; i < arr.length; i++ ){
        
        newPosi = Math.trunc( Math.random( ) * arr.length );

        if( shuffleArray[ newPosi ] === undefined ){
            shuffleArray[ newPosi ] = arr[i];
        
        }else{
            do{
                newPosi = Math.trunc( Math.random( ) * arr.length );
            }while( shuffleArray [ newPosi ] !== undefined );

            shuffleArray[ newPosi ] = arr[i];
        }
    }
    return shuffleArray;
}

console.log( shuffleThisArray( [ 1, 3, 7, 9, 15, 2, 4, 74, 16, 85 ] ) );