/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string, uma palavra
        Verificar se essa palavra é um palindromo.
        palindromo = palavra original =  palavra invertida.

    Exemplo:
        entrada: arara      original: arara, invertida: arara
        saida: true

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-2.php
*/

function checkPalindrome( word ){
    console.log( "Parametro fornecido: " + word );

    if( word === word.trim().split("").reverse().join("") ){
        return true;
    }else{
        return false;
    }

}

let checkPalindrome2 = function( word ){
    console.log( "Parametro fornecido: " + word );
    return ( word === word.trim().split("").reverse().join("") ) ? true : false;

}

checkPalindrome3 = ( word ) => {
    console.log( "Parametro fornecido: " + word );
    return ( word === word.trim().split("").reverse().join("") ) ? true : false;
}

console.log( checkPalindrome( "arara" ) );
console.log( checkPalindrome2( "arara" ) );
console.log( checkPalindrome3( "arara" ) );

console.log( checkPalindrome( "papagaio" ) );
console.log( checkPalindrome2( "papagaio" ) );
console.log( checkPalindrome3( "papagaio" ) );

