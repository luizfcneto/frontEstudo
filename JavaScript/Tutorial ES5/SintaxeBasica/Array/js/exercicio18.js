/*
    Descrição:
        Escrever uma função em js que recebe como parametro um array de numeros já ordenada
        e um numero realizar uma busca binaria neste array para encontrar esse numero e 
        retornar a posição q ele aparece.

    exemplo:
        entrada: [ 1, 3, 5, 7, 9 ]
        arr[ arr.length/2 ] === numero?
        arr[ arr.length/2 ] < numero?
            binarySearch( arr.length/2, numero )
        arr[ arr.length/2 ] > numero?
            binarySearch( arr.length/2, numero );


Solução:
*/

function binarySearch( arr, number ){
    console.log( "Parametros Fornecidos: \n" + arr + "\nNumero para encontrar: " + number );

    // console.log( arr.slice ( Math.floor( arr.length / 2 ), arr.length) );
    // arr = arr.slice (  Math.floor( arr.length / 2 ), arr.length);
    

    if( arr[ Math.floor( arr.length / 2 ) ] === number ){
        return Math.floor( arr.length / 2 );
    
    }else if( arr.length === 1 && arr[Math.floor( arr.length / 2 ) ] !== number ){
        return -1;
    
    }else if( arr[ Math.floor( arr.length / 2 ) ] < number ){
        arr = arr.slice( Math.floor( arr.length / 2 ), arr.length );
        return binarySearch( arr, number ); 
    
    }else if( arr[ Math.floor( arr.length / 2 ) ] > number ){
        arr = arr.slice( 0, Math.floor( arr.length / 2 ) );
        
        return binarySearch( arr, number );
    
    }

}

console.log( binarySearch( [ 1, 3, 7, 8, 13, 15, 29, 34, 43, 50 ], 51 ) ); 
console.log( binarySearch( [ 1, 3, 7, 8, 13, 15, 29, 34, 43, 50  ], 7 ) ); 



