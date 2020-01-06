/*
    Descrição:
        Fazer uma função em js que recebe como parametro dois numeros
        caso a soma desses dois numeros estejam entre 50 e 80 retornar 65
        senão retornar 80.

Solução:
*/

function doSomeCalculus( num1, num2 ){
    if( num1 + num2 >= 50 && num1 + num2 <= 80 ){
        return 65;
    
    }else{
        return 80;
    }
}

console.log( doSomeCalculus( 25, 45 ) );
console.log( doSomeCalculus( 50, 40 ) );