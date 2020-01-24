/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        Trocar o case de todas as letras, colocando onde tem letra minuscula a mesma letra
        só que maiuscula, e onde tem letra maiuscula colocar a mesma letra minuscula
        retornar a nova string

    Exemplo:
        entrada: "StRiNg"
        saida: "sTrInG"

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

String.toLowerCase:
    https://www.w3schools.com/jsref/jsref_tolowercase.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    https://www.geeksforgeeks.org/javascript-string-prototype-tolowercase/

Array.join: Converte Array para string
    https://www.w3schools.com/jsref/jsref_join.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    https://www.geeksforgeeks.org/javascript-array-join-method/


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-10.php
*/

function swapCase( str ) {
    console.log( "Parametro Fornecido: " + str );

    let ans = str.trim().split("");
    for( let i = 0; i < ans.length; i++ ){
        if( ans[i] === ans[i].toUpperCase() ){
            ans[i] = ans[i].toLowerCase();
        }else{
            ans[i] = ans[i].toUpperCase();
        }

    }
    return ans.join("");

}

console.log( swapCase( "AaBbc" ) );
console.log( swapCase( "StRiNg" ) );
console.log( swapCase( "pYtHon" ) );