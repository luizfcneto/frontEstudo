/*
    Descrição:
        Fazer uma função em js que receba como parametro uma string;
        retornar uma outra string baseada na string passada como parametro
        acrescentando a primeira letra no começo e no final da string:

    Exemplo:
        entrada: "chule"
        saida: "cchulec"

String: https://www.w3schools.com/js/js_string_methods.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-24.php
*/

//Minha Solução
function doChange( string ){
    if( string.length < 0 ) return "String invalida";
    console.log( "Palavra fornecida: " + string );
    let letter = string[0];
    let ans = letter + string + letter;
    return ans;
}

console.log( doChange( "chule" ) );