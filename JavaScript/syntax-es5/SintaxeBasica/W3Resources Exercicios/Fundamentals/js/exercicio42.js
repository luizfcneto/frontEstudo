/*
    Descrição:
        Escrever uma função em js que recebe como parametro tres numeros
        verificar a ordem desses numeros,
        se está no Strict mode: 10, 15, 31
        ou se está no Soft mode: 24, 22, 31 ou 22, 22, 31 
        retornar o tipo de modo que os numeros se encontram.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-42.php
*/
function whichModeIs( num1, num2, num3 ){
    console.log( "Numeros fornecidos: " + num1 + ", " + num2 + " e " + num3 );
    
    if( num1 < num2 && num2 < num3 ){
        return "Strict Mode";
    }else if( num1 === num2 || num2 < num1 && num2 < num3 ){
        return "Soft Mode";
    }else{
        return "Nenhum modo";
    }
}

console.log( whichModeIs( 10, 15, 31 ) );
console.log( whichModeIs( 24, 22, 31 ) );
console.log( whichModeIs( 22, 22, 31 ) );
console.log( whichModeIs( 15, 17, 10 ) );