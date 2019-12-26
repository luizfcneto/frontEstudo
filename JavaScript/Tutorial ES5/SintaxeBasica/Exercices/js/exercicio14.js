/*
    Descrição:
        Escrever uma função em js que receba como parametro um nome de um arquivo 
        retorne a extensão desse arquivo.

    Exemplo:
        entrada: arquivo.html
        saida: html

        entrada: outroarquivo.js
        saida: js

String:
    https://www.w3schools.com/js/js_string_methods.asp
    

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-14.php
*/

// Minha Solução:
function retornaExtensaoArquivo( nomeArquivo ){
    console.log( "Nome do arquivo: " + nomeArquivo );
    let extension = nomeArquivo.slice( nomeArquivo.lastIndexOf( "." ) + 1, );
    return extension;
}

console.log( retornaExtensaoArquivo( "arquivo.html" ) );
console.log( retornaExtensaoArquivo( "outro.arquivo.js" ) );