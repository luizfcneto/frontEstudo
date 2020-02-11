/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero
        A partir desse numero gerar uma string com letras aleatorias com 
        o tamanho definido pelo argumento fornecido.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php
*/

function generateRandomString( length ){
    console.log( "Parametro Fornecido: " + length );

    let stringChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans = "";
    for( let i = 0; i < length; i++ ){
        ans += stringChar.charAt( generateNumber() );
    }
    return ans;
}

function generateNumber(){
    return Math.random( ) * 59;
}

console.log( generateRandomString( 10 ) );
console.log( generateRandomString( 5 ) );
console.log( generateRandomString( 7 ) );
console.log( generateRandomString( 13 ) );

