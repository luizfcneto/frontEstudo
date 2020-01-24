/*
    Descrição:
        Fazer uma função em javascript que receba dois numeros não negativos como parametro
        Verificar se um deles é multiplo de 7 ou de 11.
        Caso pelo menos um seja, retornar verdadeiro
        Caso os dois sejam, retornar falso
        Caso nenhum dos dois sejam, retornar falso.
    
Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-46.php
*/

function verify( num1, num2 ){
    console.log( "Numeros fornecidos: " + num1 + " & " + num2 );

    if( ( num1 % 7 === 0 || num1 % 11 === 0 ) && ( num2 % 7 === 0 || num2 % 11 === 0 ) ){
        return false;
    
    }else if( num1 % 7 === 0 || num1 % 11 === 0 ){
        return true;
    
    }else if( num2 % 7 === 0 || num2 % 11 === 0 ){
        return true;
    
    }else{
        return false;
    }

}

console.log( verify( 28, 14 ) );    //false, 28 por 7, 14 por 7
console.log( verify( 16, 88 ) );    //true 88 por 11
console.log( verify( 77, 13 ) );    //true 77 por 7 e 11
console.log( verify( 33, 77 ) );    //false, 33 por 11, 77 por 7 e 11
console.log( verify( 19, 57 ) );    //false 