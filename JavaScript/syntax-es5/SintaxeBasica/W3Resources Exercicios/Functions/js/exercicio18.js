/*
    Descrição:
        fazer uma função que receba um array ( de numeros ) e um outro numero
        Fazer uma busca binária desse numero nesse array.
        Retornar verdadeiro caso o numero fornecido esteja presente no array
        Caso contrario, retornar falso.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-18.php
*/

function binarySearch( arr, num, posiInicial, posiFinal ){
    console.log( "Parametros Fornecidos: " + arr + " , " + num + " , " + posiInicial + " , " + posiFinal );

    if( posiFinal - posiInicial !== 1 ){
        let mid = posiInicial + Math.trunc( ( posiFinal - posiInicial ) / 2 );
        console.log( Math.trunc( ( posiFinal - posiInicial ) / 2 ) );
        console.log( posiInicial, mid, posiFinal );
        
        if( num === arr[ mid ] ){
            return {
                numero: num,
                boolean: true
            };
        }
        
        if( num < arr[ mid ] ){
            return binarySearch( arr, num, posiInicial, mid );
        }

        if( num > arr[ mid ] ){
            return binarySearch( arr, num, mid, posiFinal );
        }
        
    } else {
        console.log( posiInicial, posiFinal );
        return {
            numero: num,
            boolean: false
        };
        
    }
   
}


// console.log( binarySearch( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ], 3, 0, 9 ) );

// console.log( binarySearch( [ 2, 3, 4, 10, 40 ], 10, 0, 4 ) );

// console.log( binarySearch( [ 2, 5, 8, 10, 14, 19, 23, 24, 25, 30, 50 ], 23, 0, 10 ) );


function binarySearch2( arr, num ){
    console.log( "Parametros Fornecidos: " + arr + " & " + num );

    if( arr.length > 1 ){
        let mid = Math.trunc( ( arr.length - 1 ) / 2 );

        if( arr[ mid ] === num ){
            return true;
        }

        if( num < arr[ mid ] ){
            arr = arr.slice( 0, mid - 1 );
            return binarySearch2( arr, num );
        
        } else if( num > arr[ mid ] ){
            arr = arr.slice( mid + 1, arr.length );
            return binarySearch2( arr, num );
        } 

    }else{
        console.log( arr );
        if( arr.length === 1 ){
            if( arr[0] === num ){
                return true;
            }
        }
        return false;
    }
}

console.log( binarySearch2( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ], 3 ) );

console.log( binarySearch2( [ 2, 3, 4, 10, 40 ], 10 ) );

console.log( binarySearch2( [ 2, 5, 8, 10, 14, 19, 23, 24, 25, 30, 50 ], 23 ) );