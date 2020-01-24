/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero 
        verificar se ele está entre 40 e 10 000.
        Retornar verdadeiro, caso a condição acima seja aceita,
        caso contrario retornar falso.


    OBS: 
        Fazer uma outra função em que receba mais dois parametros, alem do numero, representando o 
        escopo minimo e maximo que esse numero pode estar inserido ou não.
        Retornar verdadeiro ou falso, caso a condição do numero estar dentro deste escopo
        seja atendida.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-47.php
*/

function verify( num ){
    console.log( "Numero fornecido: " + num );

    if( num < 40 || num > 10000 ){
        return false;
    
    }else {
        return true;
    
    }

}


function verify2( num, min, max ){
    console.log( "Numero fornecido: " + num + " está entre " + min + " e " + max );

    if( num >= min && num  <= max ){
        return true;
    
    }else{
        return false;
    }

}

console.log( verify( 50 ) );    //true;
console.log( verify( 23 ) );    //false;
console.log( verify( 40 ) );    //true;
console.log( verify( 10000 ) );    //true;
console.log( verify( 15000 ) );    //false;
console.log( verify( 40000 ) );    //false;


console.log( verify2( 50, 50, 100 ) );    //true;
console.log( verify2( 23, 50, 100 ) );    //false;
console.log( verify2( 40, 4, 40 ) );    //true;
console.log( verify2( 10, 2, 8 ) );    //false;