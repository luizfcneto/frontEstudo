/*
    Descrição:  
        Fazer uma função em js que recebe como parametro uma string contendo algumas palavras
        Retornar uma outra string juntando as palavras separadas com "-" e letras minusculas
        
    Exemplo:
        entrada: "Luiz e Renata apaixonados!"
        saida: "Luiz-e-Renata-apaixonados!"
    
string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim


String.toLowerCase:
    https://www.w3schools.com/jsref/jsref_tolowercase.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    https://www.geeksforgeeks.org/javascript-string-prototype-tolowercase/

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split


Array.join: Converte Array para string
    https://www.w3schools.com/jsref/jsref_join.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    https://www.geeksforgeeks.org/javascript-array-join-method/
    
Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-7.php
*/

function stringParameterize( str ){
    console.log( "Parametro Fornecido: " + str );
    return str.trim().toLowerCase().split(" ").join("-");

}

const stringParameterize2 = ( str ) => str.trim().toLowerCase().split(" ").join("-");

console.log( stringParameterize(  "Luiz e Renata apaixonados!" ) );