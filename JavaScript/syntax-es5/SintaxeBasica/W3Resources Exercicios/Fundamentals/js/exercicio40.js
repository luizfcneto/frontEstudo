/*
    Descrição:
        Fazer uma função em js que receba como parametro dois numeros
        verificar dentre esses dois numeros se um deles é 8, ou a soma deles é 8
        ou a subtração. 
        Caso seja, retornar verdadeiro, caso contrario falso.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-40.php
*/

function verify8( num1, num2 ){
    console.log( "Numeros fornecidos: " + num1 + " e " + num2 );
    if( num1 === 8 || num2 === 8 ){
        return true;

    }else if( num1 + num2 === 8 ){
        return true;

    }else if( num1 - num2 === 8 || num2 - num1 === 8 ){
        return true;

    }else{
        return false;
    
    }

}

// solução 2:
function verify82( num1, num2 ){
    console.log( "Numeros fornceidos: " + num1 + " e " + num2 );

    if( num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs( num1 - num2 ) === 8 ){
        return true;
    }else{
        return false;
    }

}

// Solução 3:
let verify83 = ( num1, num2 ) => {
    console.log( "Numeros fornceidos: " + num1 + " e " + num2 );
    if( num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs( num1 - num2 ) === 8 )    return true;
    else    return false;
} 


console.log( verify83( 16, 8 ) );
console.log( verify83( 24, 32 ) );
console.log( verify83( 4, 7 ) );