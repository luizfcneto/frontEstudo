/*
    Descrição:
        Fazer uma função em js que recebe como parametro tres numeros inteiros
        verificar se o numero é maior ou igual a 20 e menor que um dos outros numeros dados


Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-44.php
*/

function doIt( num1, num2, num3 ){
    console.log( "Numeros Fornecidos: " + num1 + ", " + num2 + " & " + num3 );
    if( num1 >= 20 ){
        if( num1 < num2 || num1 < num3 ) {
            return true;

        }else{
            return false;
        
        }
    }else{
        return false;
   
    }
}

console.log( doIt( 25, 40, 20 ) );  //true;  
console.log( doIt( 16, 10, 56 ) );  //false;
console.log( doIt( 33, 27, 80 ) );  //true;
console.log( doIt( 40, 50, 44 ) );  //true;
console.log( doIt( 40, 23, 15 ) );  //false;