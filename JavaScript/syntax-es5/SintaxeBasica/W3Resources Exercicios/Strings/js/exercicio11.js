/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        Fazer com que a string obedeça as regras do camelCase
        Retornar a nova string.
    
    Exemplo:
        entrada: "meu pastel é mais barato"
        saida: "meuPastelÉMaisBarato"

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


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-11.php
*/

function camelize( str ) {
    console.log( "Parametro Fornecido: " + str );
    
    let ans = str.trim().split(" ");

    for( let i = 0; i < ans.length; i++ ){
        let temp = ans[i].toLowerCase().split("");
        temp[0] = temp[0].toUpperCase();
        ans[i] = temp.join("");

    }
    return ans.join("");
}

console.log( camelize( "meu pastel é mais barato!" ) );
console.log( camelize( "Um nOme bOM pArA vaRiAvel" ) );
console.log( camelize( "Java Script Exercises" ) );