/*
    Descrição: 
        Fazer uma função em javascript que receba como parametro tres numeros
        Verificar se esses numeros são iguais
        caso sejam os 3 iguais retornar 30
        caso pelo menos dois desses 3 numeros sejam iguais retornar 40
        caso contrario retornar 20.

Solução:
*/

function theyAreEqual( num1, num2, num3 ){
    console.log( "Numeros fornecidos: " + num1 + ", " + num2 + " e " + num3 );
    
    if( num1 === num2 && num1 === num3 ){
        return 30;
    } else if( num1 === num2 || num2 === num3 || num1 === num3 ){
        return 20;
    }else {
        return 40;
    }

}

console.log( theyAreEqual( 3, 6, 9 ) );
console.log( theyAreEqual( 2, 2, 2 ) );
console.log( theyAreEqual( 6, 8, 6 ) );
console.log( theyAreEqual( 1, 5, 5 ) );
console.log( theyAreEqual( 7, 7, 50 ) );