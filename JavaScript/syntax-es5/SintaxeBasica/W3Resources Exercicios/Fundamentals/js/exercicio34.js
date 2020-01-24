/*
    Descrição:
        Fazer uma função em js que receba dois numeros como parametro
        Verificar qual dos dois numeros é o maior, sendo que eles tem que estar
        sob a condição de estarem entre 40 e 60 inclusive
        retornar o maior, caso a condição seja verdadeira, 
        caso contrario retornar falso.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-34.php
*/

// Minha Solução:
function verification( num1, num2 ){
    if( num1 >= 40 && num1 <= 60 && num2 >=40 && num2 <= 60 ){
        if( num1 > num2 ){
            return num1;
        }else{
            return num2;
        }
    }else{
        return false;
    }
    
}

console.log( verification( 41, 59 ) );
console.log( verification( 39, 61 ) );
console.log( verification( 45, 80 ) );
console.log( verification( 15, 60 ) );
console.log( verification( 52, 46 ) );