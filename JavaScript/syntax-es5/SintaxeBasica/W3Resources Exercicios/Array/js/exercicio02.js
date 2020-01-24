/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array
        retornar um array clonado ao parametro fornecido


Array:
    https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

    https://www.w3schools.com/jsref/jsref_map.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    https://www.w3schools.com/jsref/jsref_filter.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro

    https://www.w3schools.com/jsref/jsref_reduce.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    https://www.w3schools.com/jsref/jsref_slice_array.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    https://www.w3schools.com/js/js_json_parse.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    https://www.w3schools.com/js/js_json_stringify.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

    https://www.w3schools.com/jsref/jsref_concat_array.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    https://www.w3schools.com/jsref/jsref_from.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-2.php
*/

//Solução 1:
function arrayClone( data ){
    
    // passando por referencia
    let otherData = data;

    console.log( "1- Dado fornecido: " + data ); 
    return otherData;

}

//Solução 2:
function arrayClone2( data ){

    // passando por referencia iterando 2
    let otherData = new Array();
    // ou let otherData = [];

    console.log( "2- Dado fornecido: " + data ); 
    for( let i = 0; i < data.length; i++ ){
        otherData[i] = data[i];
    }    
    return otherData;

}

//Solução 3: utilizando método Array.map(); -> garante a mesma quantidade de elementos 
function arrayClone3( data ){
    console.log( "3- Dado fornecido: " + data ); 

    //passando por referencia:
    let otherData = [];

    // map sintaxe: Array.map( elementoAtual*, indice, arrayDestino, "this" é opicional ). parametros desse método é uma função callback ( outra função )
    // otherData = data.map( function( element ){
    //     return element;
    // });
    otherData = data.map ( ( element ) => element );

    return otherData;
}

//Solução 4: utilizando o método Array.filter(); -> não garante a mesma quantidade de elementos
function arrayClone4( data ){
    console.log( "4- Dado fornecido: " + data );

    //passando por referencia:
    let otherData = [];

    // filter sintaxe: Array.filter( funcao callback ), funcao callback = aceita parametros: ( elementoAtual*, indice, arrayDestino ).
    otherData = data.filter( ( element ) => element );
    return otherData;

}

// Solução 5: utilizando o método Array.reduce();
function arrayClone5( data ){
    console.log( "5- Dado fornecido: " + data );

    //Passando por referencia:
    let otherData = [];

    // data.reduce() sintaxe: parametros ( funcao callback(), valorInicial ) -> parametro "valorInicial" é opicional, é um valor que é passado para a a função como valor Inicial
    // parametros da funcao callback() => 
    //      1 -> total*, ou Valor inicial, ou valor retornado pela funcao callback
    //      2 -> valor corrente*, valor do elemento corrente.
    //      3 -> index corrente
    //      4 -> array, o array/objeto que o elemento corrente pertence.
    // OBS: reduce é muito poderoso para fazer uma simples clonagem de array.
    otherData = data.reduce( ( arrTemp, element ) => {
        console.log( arrTemp );
        arrTemp.push( element );
        return arrTemp;
    }, [] );

    return otherData;
}

//Solução 6: utilizando o método Array.slice();
function arrayClone6( data ){
    console.log( "6- Dado fornecido: " + data );

    //Passando por referencia:
    let otherData = [];

    return otherData = data.slice();
}

// **Solução 7** : utilizando métodos JSON.parse para tornar uma string em um objeto e JSON.stringfy para tornar um objeto em uma string
function arrayClone7( data ){
    console.log( "7- Dado fornecido " + data );

    //Melhor jeito para fazer cópias de arrays/objetos
    let otherData = [];
    otherData = JSON.parse( JSON.stringify( data ) );
    return otherData;
}

// Solução 8: Array.concat();
function arrayClone8( data ){
    console.log( "8- Dado fornecido " + data );

    //Passando por referencia
    let otherData = [];
    otherData = otherData.concat( data );
    return otherData;

}

// Solução 9: Array.from();
function arrayClone9( data ){
    console.log( "9- Dado fornecido " + data );

    //Passando por referencia
    let otherData = [];
    otherData = Array.from( data );
    return otherData;

}

console.log( arrayClone( [ 1, 2, 3 ] ) );
console.log( arrayClone2( [ "b", "a", "tata" ] ) );

console.log( arrayClone3( [ 1, 2, 3 ] ) );
console.log( arrayClone3( [ "b", "a", "tata" ] ) );

console.log( arrayClone4( [ 1, 2, 3, 4 ] ) );
console.log( arrayClone4( [ "b", "a", "ta", "ta" ] ) );

console.log( arrayClone5( [ 1, 2, 3, 4, 5 ] ) );
console.log( arrayClone5( [ "b", "a", "ta", "ta" ] ) );

console.log( arrayClone6( [ 1, 2, 3, 4, 5, 6 ] ) );
console.log( arrayClone6( [ "b", "a", "ta", "ta", "tinha" ] ) );

console.log( arrayClone7( [ 1, 2, 3, 4, 5, 6, 7 ] ) );
console.log( arrayClone7( [ "melhor", "jeito", "de", "clonar", "um", "array", "e", "objetos" ] ) );

console.log( arrayClone8( [ 1, 2, 3, 4, 5, 6, 7 , 8 ] ) );
console.log( arrayClone8( [ "b", "a", "ta", "ta", "tin", "ha" ] ) );

console.log( arrayClone9( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ) );
console.log( arrayClone9( [ "b", "a", "ta", "ta", "ti", "n", "h", "a" ] ) );
