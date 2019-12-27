/*
    Descrição:
        Fazer uma função que receba como parametro uma string
        criar uma outra string com o mesmo valor da passada como parametro e
        pegar as 3 ultimas letras dessa string e acrescentar no inicio e no fim dela
        retornar a string

    Exemplo:
        entrada: "biscoito"
        saida: "itobiscoitoito"

String:
    https://www.w3schools.com/js/js_string_methods.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-26.php
*/

//Minha Solução:
function doItAgain( string ){
    if( string.length < 3 ){
        return "Palavra Invalida";
    
    }else{
        console.log( "Palavra fornecida: " + string );
        let letters = string.slice( string.length - 3 );
        return letters + string + letters;
    }
}

console.log( doItAgain( "biscoito" ) );
console.log( doItAgain( "op" ) );