/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string e um numero inteiro
        retornar a string até a posição do numero dada por parametro

    Exemplo:
        entrada: "batata", 2
        saida: bat

        entrada: "tangerina", 5
        saida: tanger

String.substring:  
    https://www.w3schools.com/jsref/jsref_substring.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring

    
String.substr:
    https://www.w3schools.com/jsref/jsref_substr.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr


String.slice: 
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice



Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-4.php
*/

function truncateString( str, length ){
    console.log( "Parametro Fornecido: " + str + " & " + length );
    // return str.substring( 0, length + 1 );
    return str.slice( 0, length + 1 );

}


console.log( truncateString( "batata", 2 ) );
console.log( truncateString( "tangerina", 5 ) );