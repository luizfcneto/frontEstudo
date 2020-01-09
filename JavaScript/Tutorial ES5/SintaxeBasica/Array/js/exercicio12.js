/*  
    Descrição:
        Fazer uma função em js que recebe como parametro um array de inteiros
        calcular e printar a soma e o produto entre esses numeros.


Solução:
*/

function sumAndProd( arr ){
    console.log( "Parametros Fornecidos: " + arr );

    if( arr.length <= 0 ){
        console.log( "Soma: " + 0 );
        console.log( "Produto: " + 0 );
    }

    let sum = 0, prod = 1;
    for( let i = 0; i < arr.length; i++ ){
        sum += arr[i];
        prod *= arr[i];

    }
    console.log( "Soma: " + sum );
    console.log( "Produto: " + prod );
}


sumAndProd( [ 5, 2 ] );
sumAndProd( [ 1, 2, 3 ] );
sumAndProd( [ 1, 10, 9  ] );
sumAndProd( [ 0, 1, 2, 3, 4 ] );