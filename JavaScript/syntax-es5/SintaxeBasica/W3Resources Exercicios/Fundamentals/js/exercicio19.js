/*
    Descrição:
        Escrever uma função em js que receba um numero como parametro
        verificar se o numero fornecido está a 20 numeros de:
        100, ou 400.

Solução: 
*/

//Minha solução:
function isInTheRange( number ){
    // entre 80 e 100?
    if( number > 79 && number < 101 )    return true;
    
    //entre 380 e 401?
    if( number > 379 && number < 401 )   return true;
    
    else    return false;
}

console.log( isInTheRange( 25 ) );
console.log( isInTheRange( 80 ) );
console.log( isInTheRange( 100 ) );
console.log( isInTheRange( 120 ) );
console.log( isInTheRange( 385 ));
console.log( isInTheRange( 401 ) ); 