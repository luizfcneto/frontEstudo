/*
    Descrição:
        Fazer um programa em js que recebe como parametro dois arrays de numeros
        retornar o array resultante da soma entre os dois arrays fornecidos, sendo a soma
        feita entre indices.


    Exemplo:
        entrada: [ 1, 0, 2, 3, 4 ], [ 3, 5, 6, 7 , 8, 13 ];
        saida: [ 1 + 3, 0 + 5, 2 + 6, 3 + 7, 4 + 8, 13 ]
        

For:
    https://www.w3schools.com/js/js_loop_for.asp
    https://www.w3schools.com/jsref/jsref_forof.asp
    https://www.w3schools.com/jsref/jsref_forin.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-19.php
*/

//Minha solução com for:
function sum2Arr( arr, arr2 ){
    console.log( "Parametros Fornecidos: ");
    console.log( arr, arr2 );

    let result = [];

    if( arr.length > arr2.length ){

        for( let i = 0; i < arr.length; i++ ){
            
            if( arr[i] === undefined && arr2[i] !== undefined ){
                result[i] = arr2[i];
                // result.push( arr2[i] );

            }else if( arr2[i] === undefined && arr[i] !== undefined ){
                result[i] = arr[i];
                // result.push( arr[i] );

            }else{
                result[i] = arr[i] + arr2[i];
                // result.push( arr[i] + arr2[i] );

            }

        }

    }else if( arr.length <= arr2.length ){

        for( let i = 0; i < arr2.length; i++ ){

            if( arr[i] === undefined && arr2[i] !== undefined ){
                result[i] = arr2[i];
                // result.push( arr2[i] );

            }else if( arr2[i] === undefined && arr[i] !== undefined ){
                result[i] = arr[i];
                // result.push( arr[i] );

            }else{
                result[i] = arr[i] + arr2[i];
                // result.push( arr[i] + arr2[i] );

            }

        }

    }
    return result;

}

//Minha solução com For/in -> No for ( propriedade in array ), console.log( propriedade ) = indice do array/ atributo objeto
function sum2Arr2( arr, arr2 ){
    console.log( "Parametros Fornecidos: ");
    console.log( arr, arr2 );
    let result = [];

    // for( let i in arr ){
    //     console.log( "i: " + i );
    //     console.log( "Conteudo do array: " + arr[i] );
    // }

    if( arr.length > arr2.length ){

        for( let index in arr ){
            if( arr2[index] === undefined ){
                result[index] = arr[index];
                // result.push( arr[index] );

            }else{
                result[index] = arr[index] + arr2[index];
                // result.push( arr[index] + arr2[index] );
            }
        }

    }else if( arr2.length > arr.length ){
        
        for( let index in arr2 ){
            if( arr[index] === undefined ){
                result[index] = arr2[index];
                // result.push( arr2[index] );

            }else{
                result[index] = arr[index] + arr2[index];
                // result.push( arr[index] + arr2[index] );
            }            
        }
    }
    return result;
}

//**Não da pra fazer com essa solução** solução com For/of -> no for ( valorPropriedade of array ), console.log( valorPropriedade ) = conteudo do array/objeto
function sum2Arr3( arr, arr2 ){
    console.log( "Parametros fornecidos: " );
    console.log( arr, arr2 );

    let result = [];

    for( let element of arr ){
        console.log( "Conteudo: " + element );
    }

}


console.log( sum2Arr( [ 1, 0, 2, 3, 4 ], [ 3, 5, 6, 7 , 8, 13 ]  ) );
console.log( sum2Arr( [ 1, 0, 2, 3, 4, 5, 6 ], [ 3, 5, 6, 7 , 8, 13 ]  ) );
console.log( sum2Arr2( [ 1, 0, 2, 3, 4 ], [ 3, 5, 6, 7 , 8, 13 ]  ) );
console.log( sum2Arr2( [ 1, 0, 2, 3, 4, 5, 6 ], [ 3, 5, 6, 7 , 8, 13 ]  ) );