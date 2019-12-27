/*
    Descrição:
        Fazer uma função que receba uma string como parametro
        a função deve trocar a posição da primeira letra da palavra com a ultima.
        
    Exemplo:
        entrada: "ferias"
        saida: "seriaf"
   
String:
    https://www.w3schools.com/js/js_string_methods.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-23.php
*/

//Minha Solução:
function changePosition( string ){
    if( string.length <= 1 ){
        return string;
    }else{
        console.log( "Palavra fornecida: " + string);
        return string[ string.length - 1 ] + string.slice( 1, string.length - 2 ) + string[0];
    }
    
}

console.log( changePosition( "ferias" ) );
console.log( changePosition( "A" ) );