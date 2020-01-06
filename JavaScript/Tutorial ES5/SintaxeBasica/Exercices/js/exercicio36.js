/*
    Descrição:
        Fazer um método em javascript que receba como parametro 3 numeros
        Verificar se o ultimo dígito desses 3 numeros são iguais
        retornar verdadeiro caso sejam, e falso caso não sejam.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-36.php
*/

function doThis( num1, num2, num3 ){
    console.log( "Numeros Fornecidos: " + num1 + " " + num2 + " " + num3 ); 
    if( num1 < 0 || num2 < 0 || num3 < 0 )  return false;
    
    else if( num1 % 10 === num2 % 10 && num1 % 10 === num3 % 10 ){
        return true;
    
    }else{
        return false;
    }

}

console.log( doThis( 12626556582103, 654549819519253, 13651514983 ) );