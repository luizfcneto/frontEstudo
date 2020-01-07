/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        retornar uma outra string com o conteudo recebido como parametro de forma inversa.

    Exemplo: 
        entrada: "batata"
        saida: atatab

String:     
    https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

Array:
    https://www.w3schools.com/js/js_array_methods.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-48.php

*/

// Solução 1:
function revertString( str ){
    console.log( "Parametro recebido: " + str );

    let ans = "";

    for( let i = str.length - 1; i >= 0; i-- ){
        ans += str[i];
    }
    
    return ans;

}

function revertString2( str ){
    let rts = str.split("");
    console.log( "Variavel convertida em array pelo método .split(\"\"): " + rts );

    rts = rts.reverse();
    console.log( "Utilizando o método do array .reverse() pela variavel rts: " + rts );

    rts = rts.join("");
    console.log( "Utilizando o método do array .join(\"\") pela variavel rts retransformando ela, array, em string novamente " + rts );
    
    return rts;
} 

//Solução 2
function revertString2B ( str ){
    console.log( "Parametro recebido: " + str );
    return str.split("").reverse().join("");
}

//Solução 3
let revert = ( str ) => str.split("").reverse().join("");


console.log( revertString( "Batata" ) );
console.log( revertString( "Hello World!") );

console.log( revertString2B( "Batata" ) );
console.log( revertString2B( "Hello World!") );


console.log( revert( "Batata" ) );
console.log( revert( "Hello World!") );