/*
    Descrição:
        Fazer uma função em js que receba dois numeros como parametro
        Verificar se os numeros estão entre 40 e 60 ou 70 e 100 inclusive
        retornar v/f

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-33.php
*/

//Minha Solução:
function verification( num1, num2 ){
    if( ( num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60 ) || ( num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100  ) ){
        return true;
    }else{
        return false;
    }

}

console.log( verification( 35, 80 ) );
console.log( verification( 85, 65 ) );
console.log( verification( 45, 78 ) );
console.log( verification( 43, 58 ) );
console.log( verification( 72, 89 ) );

