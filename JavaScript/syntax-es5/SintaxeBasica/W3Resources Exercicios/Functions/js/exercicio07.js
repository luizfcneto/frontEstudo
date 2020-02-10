/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string.
        Contabilizar e retornar quantidade de vogais existentes nessa string.

    Exemplo:
        entrada: "Meu pastel e mais barato"
        saida: 10

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php
*/

function countTheVowels( str ){
    console.log( "Parametro Fornecido: " + str );
    
    str = str.trim().toLowerCase();

    let counter = 0;
    for( let i = 0; i < str.length; i++ ){

        if( str[i] === "a" || str[i] === "e" || str[i] === "i" || str [i] === "o" || str[i] === "u" ){
            counter++;
        }
    }

    return counter;
}

console.log( countTheVowels( "The quick brown fox") );
console.log( countTheVowels( "Meu pastel e mais barato") );