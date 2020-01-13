/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string contendo email.
        Retornar a primeira parte do email ( anterior ao "@" ) com poucos caracteres a mostra
        para garantir uma pequena proteção a pessoas não autorizadas a verem esse email
        completo.

    Exemplo:
        entrada: "canhotinhaDeOuro@yahoo.com.br"
        saida: canhot...@yahoo.com.br

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

String.slice: 
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-6.php
*/
function hidePartOfEmail( email ){
    console.log( "Parametro Fornecido: " + email );
    let arrayEmail = email.split("@");
    let firstPart = arrayEmail[0];
    let ans = firstPart.slice( 0, ( firstPart.length / 2 ) / 2 ) + "...@" + arrayEmail[1];
    return ans;
}

console.log( hidePartOfEmail( "canhotinhaDeOuro@yahoo.com.br" ) );
