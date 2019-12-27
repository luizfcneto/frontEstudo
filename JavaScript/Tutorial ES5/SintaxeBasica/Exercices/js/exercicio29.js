/*  
    Descrição:
        Fazer uma função em js que receba como parametro 3 numeros
        verificar se pelo menos um deles está entre 50 e 99 inclusive
        caso pelo menos um deles esteja, retorne verdadeiro
        caso contrario, retorne falso.

Soluçao:
*/

function isInTheRange( num1, num2, num3 ){
    if( num1 >= 50 && num1 <= 99 || num2 >=50 && num2 <= 99 || num3 >= 50 && num3 <= 99 ){
        return true;
    
    }else{
        return false;
    }
}

console.log( isInTheRange( 50, 13, 25 ) );
console.log( isInTheRange( 100, 150, 302 ) );
console.log( isInTheRange( 15, 27, 3 ) );
console.log( isInTheRange( 51, 98, 59 ) );