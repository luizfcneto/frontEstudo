/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string com palavras
        separar essas palavras por virgula e converter para um array.

string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-3.php
*/
function splitAndConvert( str ){
    console.log( "Parametro Fornecido: " )
    console.log( str );
    let array = str.trim().split(' ');
    // console.log( array );
    return array;
}

console.log( splitAndConvert( "Teste Louco Do Mohammed" ) );
console.log( splitAndConvert( "        Hello World!        " ) );