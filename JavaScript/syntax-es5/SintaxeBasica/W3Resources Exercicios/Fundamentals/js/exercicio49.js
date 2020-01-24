/*
    Descrição:
        Fazer uma função em javascript que recebe como parametro uma palavra, string.
        troque cada letra dessa palavra pelo seu sucessor no alfabeto.
        retorne a nova palavra.
    
String: 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-49.php
*/

function changeTheWord( str ){
    console.log( "Palavra Fornecida: " + str );

    let ans = "";

    for ( let i = 0; i < str.length; i++ ){
        ans += String.fromCharCode( str.charCodeAt( i ) + 1 );
        
    }
    return ans;

}

console.log( changeTheWord( "batata" ) );
console.log( changeTheWord( "abcdefgh" ) );