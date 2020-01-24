/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        fazer com que a primeira letra desta string seja letra maiuscula
        retornar a nova string

    Exemplo:
        entrada: "jose"
        saida: "Jose"

string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

string.toUppercase:
    https://www.w3schools.com/jsref/jsref_touppercase.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    https://www.geeksforgeeks.org/javascript-string-touppercase/

Array.join: Converte Array para string
    https://www.w3schools.com/jsref/jsref_join.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    https://www.geeksforgeeks.org/javascript-array-join-method/

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-8.php
*/

function capitalize( str ){
    console.log( "Parametro Fornecido: " + str );
    let ans = str.trim().split("");
    ans[0] = ans[0].toUpperCase();
    return ans.join("");

}

console.log( capitalize( "jose" ) );
console.log( capitalize( "Js string exercises" ) );
console.log( capitalize( "the quick brown fox" ) );
