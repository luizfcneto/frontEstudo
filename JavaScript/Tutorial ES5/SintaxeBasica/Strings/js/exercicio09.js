/*
    Descrição:
        Fazer uma função em js que receba como parametro uma string
        tornar todo inicio de palavra contido nessa string para letra maiuscula
        retornar a nova string

    exemplo:
        entrada: "batata frita é muito gostoso!"
        saida: "Batata Frita É Muito Gostoso!"

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


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php
*/

function capitalizeWords( str ){
    console.log( "Parametro Fornecido: " + str );
    let ans = str.trim().split( " " );

    for( let i = 0; i < ans.length; i++ ){
        let temp = ans[i].split("");
        temp[0] = temp[0].toUpperCase();
        ans[i] = temp.join("");
    }

    return ans.join(" ");

}

console.log( capitalizeWords( "batata frita é muito gostoso!" ) );
console.log( capitalizeWords( "Js string exercises" ) );
console.log( capitalizeWords( "the quick brown fox" ) );