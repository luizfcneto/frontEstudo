/*
    Descrição:
        Escrever uma função em javascript para checar se um "input" é um 
        array ou não

Array:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    https://www.w3schools.com/jsref/jsref_isarray.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

Object:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-1.php
*/

//Solução 1:
function isArray( inputData ){

    // let test = [ 1, 2, 3, 4 ];
    // let test2 = [ "a", "b", "c" ];
    // let test3 = [ "palavra0", "palavra1", "palavra2" ];

    // // Todos os tests são do tipo objeto. Não existe um tipo Array
    // console.log( "Typeof array de numeros: " + typeof test );
    // console.log( "Typeof array de char: " + typeof test2 );
    // console.log( "Typeof array de strings: " + typeof test3 );

    // //Para verificar se uma variavel é do tipo Array é necessário utilizar um método estático que faz a verificação
    // console.log( "Typeof array de numeros: " + typeof test + " É array? " + Array.isArray( test ) );
    // console.log( "Typeof array de numeros: " + typeof test2 + " É array? " + Array.isArray( test2 ) );
    // console.log( "Typeof array de numeros: " + typeof test3 + " É array? " + Array.isArray( test3 ) );
    // console.log( "Typeof array de numeros: " + typeof 5 + " É array? " + Array.isArray( 5 ) );

    console.log( "Dado fornecido: " + inputData );
    return Array.isArray( inputData );

}

// Solução 2:
function isArray2( inputData ){

    // // Existe uma função na classe de object chamada "toString()", mais especificamente: 
    // // Object.prototype.toString(), que retorna uma string representando um objeto.
    // let test = [ "c", "b", "a" ];
    // console.log( "Dado: " + test + " seu tipo é: " + Object.prototype.toString.call( test ) );
    // // ou 
    // console.log( "Dado: " + test + " seu tipo é: " + Object.prototype.toString.apply( test ) );   

    // // OBS: call = aceita como parametro uma lista de argumentos, equando o apply = aceita um array de argumentos

    console.log( "Dado fornecido: " + inputData );
    if( Object.prototype.toString.call( inputData ) === "[object Array]" ){
        
        return true;
    }else{
        
        return false;
    }

}

console.log( isArray( [1,2,3] ) );
console.log( isArray2( [ "ba", "ta", "ta" ] ) );