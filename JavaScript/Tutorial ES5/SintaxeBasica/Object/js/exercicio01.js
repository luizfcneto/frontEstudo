/*
    Descrição:
        Fazer uma função em js que liste as propriedades de um objeto 

Objects:
    https://www.w3schools.com/js/js_objects.asp
    https://www.w3schools.com/js/js_object_definition.asp

For In:
    https://www.w3schools.com/jsref/jsref_forin.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-1.php
*/

function listAllProperties( obj ){
    console.log( "Parametro fornecido: " );

    console.log( obj );

    // Forma 1: for( atributo in objeto ), 
    for( let prop in obj ){
        console.log( "Atributo/Propriedade: " + prop );
        // console.log( "Conteudo: " + obj[prop] );

    }

    // Forma 2: for( conteudoAtributo of objeto ) essa forma 2 não funciona para objeto, apenas para objetos iteraveis, como arrays/matrizes
    // for( conteudo of obj ){
    //     console.log( obj.conteudo );
    // }

}

// Definindo um objeto student de forma literal
let student = {
    name: "Luiz Fernando",
    class: "6 periodo",
    age: "23"
}

listAllProperties( student );