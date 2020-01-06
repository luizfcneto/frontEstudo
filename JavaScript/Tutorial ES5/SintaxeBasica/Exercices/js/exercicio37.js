/*
    Descrição:
        Escrever uma função que receba como parametro uma string
        caso a string tenha menos de 3 letras, converter a palavra com todas as letras maiusculas, caso contrario
        retornar uma outra string contendo as tres primeiras letras minusculas
        
    Exemplo:
        entrada: Serelepi
        saida: serelepi


        entrada: ArVore
        saida: arvore

String:
    https://www.w3schools.com/jsref/jsref_tolowercase.asp
    https://www.w3schools.com/jsref/jsref_touppercase.asp
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    

Solulção: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-37.php
*/


function stringLowerCase( str ){
    console.log( "Palavra fornecida: " + str );
    if( str.length < 3 ){
        return str.toUpperCase();
    }else{
        return str.slice( 0, 3 ).toLowerCase() + str.slice( 3, str.length );
    }
    
}

console.log( stringLowerCase( "Serelepi" ) );
console.log( stringLowerCase( "ArVore" ) );