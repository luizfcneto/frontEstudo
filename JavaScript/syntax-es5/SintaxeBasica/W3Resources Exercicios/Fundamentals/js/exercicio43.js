/*
    Descrição:
        Fazer uma função em js que recebe como parametro tres numeros inteiros positivos
        Verificar se pelo menos dois deles ou todos possuem o mesmo numero de unidade.
        

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-43.php
*/

function verifyUnityDigit( num1, num2, num3 ){
    console.log( "Numeros fornecidos: " + num1 + ", " + num2 + " & " + num3 );

    if( num1 % 10 === num2 % 10 || num2 % 10 === num3 % 10 || num1 % 10 === num3 % 10 ){
        return true;
    }else{
        return false;
    }

}

console.log( verifyUnityDigit( 13, 15, 23 ) );
console.log( verifyUnityDigit( 555, 25, 35 ) );
console.log( verifyUnityDigit( 39, 18, 26 ) );