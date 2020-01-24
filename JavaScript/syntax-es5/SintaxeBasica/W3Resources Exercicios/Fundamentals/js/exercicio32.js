/*
    Descrição:
        Fazer uma função em js que recebe como parametro dois numeros.
        Verificar qual destes dois numeros é o mais próximo de 100
        retornar o mais próximo.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-32.php
*/

// Minha Solução:
function whichIsTheNearst100( num1, num2 ){
    if( Math.abs( num1 - 100 ) > Math.abs( num2 - 100 ) ){
        return num2;
    
    }else{
        return num1;
    }

}

console.log( whichIsTheNearst100( 15,50 ) );
console.log( whichIsTheNearst100( 90, 111 ) );
console.log( whichIsTheNearst100( 95, 110 ) );
console.log( whichIsTheNearst100( 91, 105 ) );