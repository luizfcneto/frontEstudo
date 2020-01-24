/*
    Descrição:
        Fazer uma função em js que receba como parametro dois numeros
        Verificar se ambos estão entre 50 e 99 inclusive. 
        Caso ambos estejam, retornar verdadeiro
        Caso contrario retornar falso;


Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-28.php
*/

// Minha Solução:
function isInTheRange( num1, num2 ){
    console.log( num1, num2 );
    if( num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99 ){
        return true;
    }else{
        return false;
    }
}

console.log( isInTheRange( 50, 37 ) );
console.log( isInTheRange( 51, 98 ) );
console.log( isInTheRange( 99, 120 ) );