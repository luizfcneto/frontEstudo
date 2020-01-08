/*
    Descrição:
        Escrever uma função em js que receba como parametro um array e um numero
        Retornar a quantidade de elementos do array definido pelo parametro numero.
        Caso ele não mande um numero como parametro, retornar somente o primeiro elemento do array

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-3.php
*/

//Solução 1: 
function first( arr, quantity ){    
    console.log( "Parametros recebidos: " + arr + " & " + quantity );

    if( quantity <= 0 || quantity === undefined ){
        if( arr.length === 0 ){
            return [];
        }else{
            return arr[0];
        }

    } else if( quantity >= arr.length ){
        let ans = [];
        for( let i = 0; i < arr.length; i++ ){
            ans[i] = arr[i];
        }
        return ans;
    
    }else{
        let ans = [];
        for( let i = 0; i < quantity; i++ ){
            ans[i] = arr[i];
        }
        return ans;

    }
}

function first2( arr, quantity ){
    console.log( "Parametros recebidos: " + arr + " & " + quantity );

    if( quantity <= 0 || quantity === undefined ){
        if( arr.length === 0 ){
            return [];
        }else{
            return arr.slice( 0, 1 );
        }
    
    }else if( quantity >= arr.length ){
        return arr.slice( 0, arr.length ); 
    
    }else{
        return arr.slice( 0, quantity );
    }

}


console.log( first( [7, 9, 0, -2] ) );
console.log( first( [], 3 ) );
console.log( first( [7, 9, 0, -2], 3 ) );
console.log( first( [7, 9, 0, -2], 6 ) );
console.log( first( [7, 9, 0, -2], -3 ) );

console.log( first2( [7, 9, 0, -2] ) );
console.log( first2( [], 3 ) );
console.log( first2( [7, 9, 0, -2], 3 ) );
console.log( first2( [7, 9, 0, -2], 6 ) );
console.log( first2( [7, 9, 0, -2], -3 ) );